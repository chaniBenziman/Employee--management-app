import { Routes } from '@angular/router';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { AddPositionComponent } from './position/add-position/add-position.component';
import { AllEmployeesComponent } from './employee/all-employees/all-employees.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
   { path: "", redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: HomepageComponent},
    { path: "signin", component: LoginComponent},
    { path: "register", component: RegisterComponent},
   { path: "employees", component:AllEmployeesComponent},
   { path: "editEmployee/:employeeId", component:EditEmployeeComponent},
   { path: "addEmployee", component:AddEmployeeComponent},
   { path: "addPosition", component:AddPositionComponent},
];
