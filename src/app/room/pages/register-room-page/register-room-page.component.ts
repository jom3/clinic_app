import { Component } from '@angular/core';
import { CommonModule, LocationStrategy } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-register-room-page',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './register-room-page.component.html',
  styleUrls: ['./register-room-page.component.css'],
})
export class RegisterRoomPageComponent {
  registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    desc: [''],
  });

  constructor(
    private fb: FormBuilder,
    private roomService: RoomService,
    private location: LocationStrategy
  ) {}

  onRegister() {
    if (this.registerForm.invalid) return;
    const roomData = this.registerForm.getRawValue();
    this.roomService.postRoom(roomData).subscribe({
      next: (r) => {
        console.log(r);
        this.location.back();
      },
    });
  }

  onBack() {
    this.location.back();
  }
}
