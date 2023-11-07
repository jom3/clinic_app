import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRoomPageComponent } from './register-room-page.component';

describe('RegisterRoomPageComponent', () => {
  let component: RegisterRoomPageComponent;
  let fixture: ComponentFixture<RegisterRoomPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegisterRoomPageComponent]
    });
    fixture = TestBed.createComponent(RegisterRoomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
