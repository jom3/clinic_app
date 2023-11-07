import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSpecialityPageComponent } from './register-speciality-page.component';

describe('RegisterSpecialityPageComponent', () => {
  let component: RegisterSpecialityPageComponent;
  let fixture: ComponentFixture<RegisterSpecialityPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegisterSpecialityPageComponent]
    });
    fixture = TestBed.createComponent(RegisterSpecialityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
