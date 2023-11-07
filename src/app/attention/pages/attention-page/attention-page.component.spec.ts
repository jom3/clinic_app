import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentionPageComponent } from './attention-page.component';

describe('AttentionPageComponent', () => {
  let component: AttentionPageComponent;
  let fixture: ComponentFixture<AttentionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AttentionPageComponent]
    });
    fixture = TestBed.createComponent(AttentionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
