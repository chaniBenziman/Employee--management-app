import { Injectable } from '@angular/core';
import { PositionEmployee } from '../models/positionEmployee.model';
import { Observable } from 'rxjs';
import { Position } from '../models/position.model';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Injectable({
  providedIn: 'root'
})
export class PositionServiceService {

  constructor(private http: HttpClient) { } // Inject HttpClient here
  
  public getEmployeePositions(id: number): Observable<PositionEmployee[]> {
    return this.http.get<PositionEmployee[]>(`https://localhost:7163/api/Employees/${id}/position/`)
  }

  public deletePositionPerEmployee(EmployeeId: Number,PositionId:Number): Observable<PositionEmployee> {
    return this.http.delete<PositionEmployee>(`https://localhost:7163/api/Employees/${EmployeeId}/position/${PositionId}`); 
  }

  getPositionsOfEmployeeList(id: number): Observable<PositionEmployee[]> {
     return this.http.get<PositionEmployee[]>(`https://localhost:7163/api/Employees/${id}/positions`)
  }
  
  public getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>('https://localhost:7163/api/Positions')
  } 

  public updatePosition(position:PositionEmployee,EmployeeId: Number,PositionId:Number): Observable<PositionEmployee> {
     return this.http.put<PositionEmployee>(`https://localhost:7163/api/Employees/${EmployeeId}/position/${PositionId}`,position);
   }
   
   public getPositionPerEmployeeById(EmployeeId: Number,PositionId:Number): Observable<PositionEmployee> {
    return this.http.get<PositionEmployee>(`https://localhost:7163/api/Employees/${EmployeeId}/position/${PositionId}`)
  }

  public addPositionForEmployee(EmployeeId: Number,position:PositionEmployee): Observable<PositionEmployee> {
    return this.http.post<PositionEmployee>(`https://localhost:7163/api/Employees/${EmployeeId}/position`,position);
  }
  
  public addPosition(p:Position): Observable<Position> {
    return this.http.post<Position>(`https://localhost:7163/api/Positions`,p); 
  }
}
