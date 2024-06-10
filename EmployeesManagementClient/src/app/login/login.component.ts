import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public LoginForm!: FormGroup
  public Employee!: Employee[];

  static flag :boolean |null=false;
  showRotatingIcon: boolean | undefined;
  hide: boolean | undefined;
  userExists: boolean | undefined;
  errorMessage: string = '';
constructor(private _employeerService:EmployeeService,private router:Router){}

ngOnInit(): void {
  this.LoginForm = new FormGroup({
    'firstName': new FormControl("admin",[Validators.required, Validators.minLength(3)]),
    'lastName': new FormControl("business",[Validators.required, Validators.minLength(3)]),
    'password': new FormControl( "1234",Validators.required),
  });
  } 
 

  enter() : void {
    const password = this.LoginForm.get('password')!.value;
    const firstName = this.LoginForm.get('firstName')!.value;
    const lastName = this.LoginForm.get('lastName')!.value;
    this._employeerService.GetByEmployeeNameAndPassword(firstName,lastName,password).subscribe(
      response => {
        const token = response.token;
        sessionStorage.setItem('token', token);
      },
      error => {
        this.errorMessage = 'Failed to login. Please try again.';
      }
    );
    sessionStorage.setItem('name', lastName);
    this.router.navigate(["/employees"]);
  }
}

// togglePasswordVisibility() {
 
// }

