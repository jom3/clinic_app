import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAttentionPageComponent } from './register-attention-page.component';

describe('RegisterAttentionPageComponent', () => {
  let component: RegisterAttentionPageComponent;
  let fixture: ComponentFixture<RegisterAttentionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegisterAttentionPageComponent]
    });
    fixture = TestBed.createComponent(RegisterAttentionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
