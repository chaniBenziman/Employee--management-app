import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmployeesComponent } from './all-employees.component';

describe('AllemployeesComponent', () => {
  let component: AllEmployeesComponent;
  let fixture: ComponentFixture<AllEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllEmployeesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
