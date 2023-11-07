import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStaffPageComponent } from './register-staff-page.component';

describe('RegisterStaffPageComponent', () => {
  let component: RegisterStaffPageComponent;
  let fixture: ComponentFixture<RegisterStaffPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegisterStaffPageComponent]
    });
    fixture = TestBed.createComponent(RegisterStaffPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
