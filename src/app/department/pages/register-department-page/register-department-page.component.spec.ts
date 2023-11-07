import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDepartmentPageComponent } from './register-department-page.component';

describe('RegisterDepartmentPageComponent', () => {
  let component: RegisterDepartmentPageComponent;
  let fixture: ComponentFixture<RegisterDepartmentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegisterDepartmentPageComponent]
    });
    fixture = TestBed.createComponent(RegisterDepartmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
