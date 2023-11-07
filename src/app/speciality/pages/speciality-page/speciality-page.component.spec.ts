import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityPageComponent } from './speciality-page.component';

describe('SpecialityPageComponent', () => {
  let component: SpecialityPageComponent;
  let fixture: ComponentFixture<SpecialityPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SpecialityPageComponent]
    });
    fixture = TestBed.createComponent(SpecialityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
