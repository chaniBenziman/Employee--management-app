import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';
import Swal from 'sweetalert2';
import { AddPositionComponent } from '../../position/add-position/add-position.component';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from '../../models/employee.model';
import { Position } from '../../models/position.model';
import { PositionServiceService } from '../../service/position-service.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EditPositionComponent } from '../../position/edit-position/edit-position.component';
@Component({
    selector: 'app-add-employee',
    standalone: true,
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.css'],
    providers: [EmployeeService, HttpClientModule],
    imports: [CommonModule, MatTableModule, HttpClientModule, MatIconModule, MatFormFieldModule,
        MatRadioModule, MatDatepickerModule, MatNativeDateModule, FormsModule, ReactiveFormsModule,
        MatInputModule, MatSelectModule, EditPositionComponent]
})
export class AddEmployeeComponent implements OnInit {

  public employeeForm: FormGroup;
  positions: Position[] = [];
  genders = [
    { value: 0, viewValue: 'Male' },
    { value: 1, viewValue: 'Female' }
  ];
  public employee: Employee = {
    employeeId: null,
    firstName: "",
    lastName: "",
    identity: "",
    birthDate: null,
    positionEmployees: [],
    gender: null,
    entryDate: null,
  
  };
  constructor(
    private formBuilder: FormBuilder,
    private _employeeService: EmployeeService,
    private router: Router,
    private dialog: MatDialog,
    private _positionEmployeeService: PositionServiceService
  ) { }

  ngOnInit(): void {
    
    this.employeeForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      identity: new FormControl('', Validators.required),
      birthDate: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      entryDate: new FormControl('', Validators.required),
    });
  }
  addPosition() {
    this.router.navigate(["/addPosition"]);
  }
  save() {
    // בדיקת תקינות הטופס
    if (this.employeeForm.invalid) {
      return;
    }
  
this.employee.birthDate=this.employeeForm.get('birthDate').value;
this.employee.entryDate=this.employeeForm.get('entryDate').value; 
this.employee.identity=this.employeeForm.get('identity').value;
this.employee.firstName=this.employeeForm.get('firstName').value;
this.employee.lastName=this.employeeForm.get('lastName').value;
this.employee.gender=this.employeeForm.get('gender').value;

    console.log("addemp",this.employee);
    // שמירת העובד באמצעות ה-Service
    this._employeeService.addEmployee(this.employee).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Employee added successfully',
      });
      this.router.navigate(["/employees"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/"]);
  }
  openAddPositionDialog(): void {
    this.employee.birthDate=this.employeeForm.get('birthDate').value;
    this.employee.entryDate=this.employeeForm.get('entryDate').value; 
    this.employee.identity=this.employeeForm.get('identity').value;
    this.employee.firstName=this.employeeForm.get('firstName').value;
    this.employee.lastName=this.employeeForm.get('lastName').value;
    this.employee.gender=this.employeeForm.get('gender').value;
    const dialogRef = this.dialog.open(AddPositionComponent, {
      width: '500px',
      data: { employee:this.employee as Employee } 
    });
  
     dialogRef.afterClosed().subscribe(result => {this.employee.positionEmployees=result;
      console.log('The dialog was closed',this.employee);
     });
    
  }
  isFormValid() {
    return !this.employeeForm.valid;
  }
}



