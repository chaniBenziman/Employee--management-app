import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms'; // Import FormControl for search field
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'; // Import debounceTime and distinctUntilChanged for debounce functionality
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../service/employee.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
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

@Component({
  selector: 'app-allemployees',
  standalone: true,
  imports: [  CommonModule, MatTableModule,HttpClientModule,MatIconModule, MatFormFieldModule,
    MatRadioModule,MatDatepickerModule,MatNativeDateModule,  FormsModule, ReactiveFormsModule,
    MatInputModule, MatSelectModule],
  templateUrl: './all-Employees.component.html',
  styleUrls: ['./all-Employees.component.css'],
  providers: [EmployeeService,HttpClientModule]
})
export class AllEmployeesComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'identity', 'entryDate', 'actions'];
  dataSource: MatTableDataSource<Employee>;
  searchControl: FormControl = new FormControl(''); // FormControl for search field
  isEdit:boolean=false;
  constructor(
    private employeeService: EmployeeService,
    private dialog: MatDialog,
    private router:Router,
  ) {
    this.dataSource = new MatTableDataSource<Employee>();
  }

  ngOnInit(): void {
    this.getAllEmployees();

    // Subscribe to changes in the search field
    this.searchControl.valueChanges.pipe(
      debounceTime(300), // Debounce for 300ms
      distinctUntilChanged() // Only emit distinct values
    ).subscribe(value => {
      this.applyFilter(value); // Call applyFilter function with the search value
    });
  }

  getAllEmployees() {
    this.employeeService.getEmployee().subscribe((employees: Employee[]) => {
      // Filter active employees
      this.dataSource.data = employees;
    });
  }

  addEmployee() {
    this.router.navigate(["/addEmployee"]);
  }

  // editEmployee(employee: Employee) {
  //   const dialogRef = this.dialog.open(EditEmployeeComponent, {
  //     width: '400px', // Adjust the width as needed
  //     data: employee
  //   });

    // dialogRef.afterClosed().subscribe(result => {
    //   // Perform actions after the dialog is closed, if needed
    //   console.log('The dialog was closed');
    // });
  // }
  editEmployee(employee:Employee){
    this.router.navigate(["/editEmployee", employee.employeeId]);
  }

  deleteEmployee(employee: Employee) {
    console.log("try to delete")
    this.employeeService.deleteEmployee(employee.employeeId).subscribe(() => {
      // Success message
      Swal.fire({
        icon: 'success',
        title: 'Employee deleted successfully',
      }).then(() => {
        // Update table with active employees
        this.getAllEmployees();
      });
    });
  }

  download() {
    // Create a new workbook
    let workbook = XLSX.utils.book_new();
    
    // Convert data source to array of arrays
    let data = this.dataSource.data.map(employee => [employee.firstName, employee.lastName, employee.identity, employee.entryDate]);
    
    // Add worksheet to the workbook
    let worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Employees');
    
    // Convert workbook to binary string
    let wbout = XLSX.write(workbook, {bookType: 'xlsx', type: 'binary'});
    
    // Function to save the Excel file
    function s2ab(s: any) {
      const buf = new ArrayBuffer(s.length);
      const view = new Uint8Array(buf);
      for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
      return buf;
    }
    
    // Save the Excel file and trigger download
    saveAs(new Blob([s2ab(wbout)], {type: 'application/octet-stream'}), 'employees.xlsx');
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
