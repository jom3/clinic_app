import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterIllnessPageComponent } from './register-illness-page.component';

describe('RegisterIllnessPageComponent', () => {
  let component: RegisterIllnessPageComponent;
  let fixture: ComponentFixture<RegisterIllnessPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegisterIllnessPageComponent]
    });
    fixture = TestBed.createComponent(RegisterIllnessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
