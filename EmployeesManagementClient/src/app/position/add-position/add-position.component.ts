import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employee } from '../../models/employee.model';
import { PositionFormComponent } from '../position-form/position-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PositionEmployee } from '../../models/positionEmployee.model';
import { PositionServiceService } from '../../service/position-service.service';

@Component({
  // providers:[HttpHandler],
  selector: 'app-add-position',
  standalone: true,
  templateUrl: './add-position.component.html',
  styleUrl: './add-position.component.css',
  imports: [PositionFormComponent, HttpClientModule]
})
export class AddPositionComponent implements OnInit {
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
  public employeePosition: PositionEmployee = {
    positionId: 0,
    positionName: null,
    position: null,
    isManagement: false,
    entryDate: null
  };

  constructor(
    public dialogRef: MatDialogRef<AddPositionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { employee: Employee, employeePosition: PositionEmployee}
  ) {

  }
  ngOnInit(): void {
    console.log("in add : ", this.data.employee)
    this.employee = this.data.employee;
    this.employeePosition = this.data.employeePosition;

  }
  addPosition(employeePosition: PositionEmployee) {
    console.log("in addd : ", employeePosition)
    this.employee.positionEmployees.push(employeePosition);
    this.dialogRef.close(this.employee.positionEmployees);

  }
  onCancel(): void {
    this.dialogRef.close(this.employee.positionEmployees);
  }

}

