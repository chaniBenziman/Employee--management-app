import { Component, EventEmitter, Inject, Input, OnInit, Output, input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee.model';
import { PositionEmployee } from '../../models/positionEmployee.model';
import { Position } from '../../models/position.model';
import { PositionServiceService } from '../../service/position-service.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { EditPositionComponent } from '../edit-position/edit-position.component';


@Component({
  selector: 'app-position-form',
  standalone: true,
  imports: [
    MatDatepickerModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatNativeDateModule,
    MatSelectModule,
    CommonModule,
     MatTableModule,HttpClientModule,MatIconModule, MatFormFieldModule,
    MatRadioModule,

  ],
  templateUrl: './position-form.component.html',
  styleUrls: ['./position-form.component.css'],
  providers: [PositionServiceService, HttpClient, MatOption,
  ],
})
export class PositionFormComponent implements OnInit {
  positionForm: FormGroup;
  @Input() employee: Employee;
  @Input() employeePosition: PositionEmployee;
  @Output() submitEvent: EventEmitter<PositionEmployee> = new EventEmitter<PositionEmployee>();
  positions: Position[];

  constructor(
    private _positionService: PositionServiceService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    
console.log("employeePosition",this.employeePosition) 
    this._positionService.getPositions().subscribe({
      next: (res: Position[]) => {
        this.positions = res;
      },
      error: (err) => {
        console.error(err);
      }
    });


    this.positionForm = this.formBuilder.group({
      Position: new FormControl(this.employeePosition.positionId, Validators.required),
      positionName: new FormControl(this.employeePosition.positionName, Validators.required),
      entryDate: new FormControl(this.employeePosition.entryDate, Validators.required),
      isManagement: new FormControl(this.employeePosition.isManagement, Validators.required)
    });
  }


  isPositionDisabled(PositionName: String) {
    if (this.employee && this.employee.positionEmployees) {
      for (let i = 0; i < this.employee.positionEmployees.length; i++) {
        if (this.employee.positionEmployees[i] && this.employee.positionEmployees[i].positionName === PositionName && this.employee.positionEmployees[i].positionName !== this.employeePosition.positionName) {
          return true;
        }
      }
    }
    return false;

  }

  onSubmit() {
console.log("employeePosition",this.employeePosition.entryDate)
console.log("employeePosition",this.employeePosition.positionName)
console.log("employeePosition",this.employeePosition)
    for (let i = 0; i < this.positions.length; i++) {
      if (this.positions[i].positionName === this.positionForm.value.positionName) {
        this.employeePosition.positionId = this.positions[i].positionId;
      }
    }
    this.employeePosition.positionName = this.positionForm.value.positionName;
    this.employeePosition.entryDate = this.positionForm.value.entryDate;
    this.employeePosition.isManagement = this.positionForm.value.isManagement;


    this.submitEvent.emit(this.employeePosition as PositionEmployee);

  }


}
