import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllnessPageComponent } from './illness-page.component';

describe('IllnessPageComponent', () => {
  let component: IllnessPageComponent;
  let fixture: ComponentFixture<IllnessPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IllnessPageComponent]
    });
    fixture = TestBed.createComponent(IllnessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
