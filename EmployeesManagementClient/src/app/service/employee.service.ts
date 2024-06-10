import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from '../models/employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  public getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`https://localhost:7163/api/Employees`)
  } 
  public addEmployee(employee:Employee): Observable<Employee> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
     return this.http.post<Employee>(`https://localhost:7163/api/Employees`,employee,{headers});
   }
   public updateEmployee(employee:Employee,id: number): Observable<Employee> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
     return this.http.put<Employee>(`https://localhost:7163/api/Employees/${id}`,employee,{headers});
   
   }
   public deleteEmployee(id: number){

     return this.http.delete(`https://localhost:7163/api/Employees/${id}`);
   }
    public getEmployeeById(id: number): Observable<Employee> {
      return this.http.get<Employee>(`https://localhost:7163/api/Employees/${id}`);
    }

public GetByEmployeeNameAndPassword(firstName:string,lastName:string,password:string){
  return this.http.post<any>(`https://localhost:7163/api/Auth`,{firstName,lastName,password});
}
getToken(): string | null {
  return sessionStorage.getItem('token');
}
}
