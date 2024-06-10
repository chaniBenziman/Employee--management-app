import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, MatFormFieldModule,
    MatInputModule, MatButtonModule,MatIconModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  public SigninForm!: FormGroup
  // public user!: user;
  public employee: Employee = {
    employeeId: null,
    firstName: "",
    lastName: "",
    identity: "",
    // password: null,
    birthDate: null,
    positionEmployees: [],
    gender: null,
    entryDate: null,
  
  };
  static flag: boolean | null = false;
  showRotatingIcon: boolean | undefined;
  hide: boolean | undefined;
  userExists: boolean | undefined;
  constructor(private _UserService: EmployeeService, private router: Router,private route :ActivatedRoute) { }

  ngOnInit(): void {
    let newName:string
 this.route.params.subscribe(param=>newName=param['name'])



    this.SigninForm = new FormGroup({
      'name': new FormControl(newName, [Validators.required, Validators.minLength(3)]),
      'password': new FormControl("", Validators.required),
      'address': new FormControl("", Validators.required),
      'email': new FormControl("", Validators.required)

    });
  }

  public register() {
    if (this.SigninForm.valid) {
      const { name, password, address, email } = this.SigninForm.value;
      this.employee.firstName = name;
      // this.employee.password = password;
      // this.employee.address = address;
      // this.employee.email = email;

      this._UserService.addEmployee(this.employee).subscribe({
        next: (response) => {
          console.log("Registration successful");
          alert("Registration successful");
          this.router.navigate(["/login"]);
        },
        error: (err) => {
          console.error("Error registering: ", err);
          alert("There was an error during registration");
        }
      });
    } else {
      alert("Please fill in all required fields");
    }
  }
}
