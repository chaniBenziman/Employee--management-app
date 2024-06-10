import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPositionComponent } from './add-position.component';

describe('AddPositionComponent', () => {
  let component: AddPositionComponent;
  let fixture: ComponentFixture<AddPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPositionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
