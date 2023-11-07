import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserPageComponent } from './register-user-page.component';

describe('RegisterUserPageComponent', () => {
  let component: RegisterUserPageComponent;
  let fixture: ComponentFixture<RegisterUserPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegisterUserPageComponent]
    });
    fixture = TestBed.createComponent(RegisterUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
