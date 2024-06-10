import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { Position } from '../../models/position.model';
import { PositionEmployee } from '../../models/positionEmployee.model';
import { MatDialog } from '@angular/material/dialog';
import { PositionServiceService } from '../../service/position-service.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, DatePipe } from '@angular/common';
import { EditEmployeeComponent } from '../../employee/edit-employee/edit-employee.component';
import { AddPositionComponent } from '../add-position/add-position.component';
@Component({
  selector: 'app-edit-position',
  standalone: true,
  imports: [  MatCardModule,
    MatIconModule,
    DatePipe,
    CommonModule],
  templateUrl: './edit-position.component.html',
  styleUrl: './edit-position.component.css'
})
export class EditPositionComponent implements OnInit{
  role: string = 'Software Engineer';
  startDate: Date = new Date('2022-01-01'); 
  @Input() employeePosition : PositionEmployee;
  @Input() employee:Employee;
  isManagementRole: boolean = false;
  positions:Position[];
  constructor(private _positionsService :PositionServiceService,private dialog: MatDialog,){

  }

  ngOnInit(): void {
     this._positionsService.getPositions().subscribe({
      next: (res) => {
        this.positions = res;
        this.employeePosition.positionName = this.positions.find(p => p.positionId === this.employeePosition.positionId).positionName;
      },
      error: (err) => {
        console.error(err);
      }
    })   
  }

  editEmployeePosition(){
    const dialogRef = this.dialog.open(AddPositionComponent, {
      width: '500px',
      data: {  employee: this.employee , employeePosition :this.employeePosition} 
    });

    dialogRef.afterClosed().subscribe(result => {
      this.employee.positionEmployees=result;
    });

  }
}
