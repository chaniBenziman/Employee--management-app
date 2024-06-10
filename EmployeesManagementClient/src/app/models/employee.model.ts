import { PositionEmployee } from "./positionEmployee.model";
export class Employee {
  employeeId: number;
  firstName: string;
  lastName: string;
  identity: string;
  // password: number;
  birthDate: Date;
  gender: number;
  entryDate: Date;
  // statusActive: boolean;
  positionEmployees!:PositionEmployee[];

  constructor() {
    // this.statusActive = true;
  }
}