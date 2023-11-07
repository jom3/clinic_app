import { Component, signal } from '@angular/core';
import { CommonModule, LocationStrategy } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { User } from 'src/app/user/models/user';
import { Staff } from 'src/app/staff/models/staff';
import { Room } from 'src/app/room/models/room';
import { StaffService } from 'src/app/staff/services/staff.service';
import { UserService } from 'src/app/user/services/user.service';
import { RoomService } from 'src/app/room/services/room.service';
import { AttentionService } from '../../services/attention.service';

@Component({
  selector: 'app-register-attention-page',
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
  templateUrl: './register-attention-page.component.html',
  styleUrls: ['./register-attention-page.component.css'],
})
export class RegisterAttentionPageComponent {
  public users = signal<User[]>([]);
  public staffs = signal<any[]>([]);
  public rooms = signal<Room[]>([]);

  registerForm: FormGroup = this.fb.group({
    user_id: ['', [Validators.required]],
    staff_id: ['', [Validators.required]],
    room_id: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private staffService: StaffService,
    private userService:UserService,
    private roomService:RoomService,
    private attentionService:AttentionService,
    private location: LocationStrategy
  ) {}

  ngOnInit(): void {
    this.getUsers()
    this.getStaffs()
    this.getRooms()
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (r) => {
        this.users.set(r);
      },
    });
  }

  getStaffs() {
    this.staffService.getStaffs().subscribe({
    next: (r) => {
      this.staffs.set(r);
      console.log(r)
    },
  });
}

getRooms() {
    this.roomService.getRooms().subscribe({
      next: (r) => {
        this.rooms.set(r);
      },
    });
  }

  onRegister() {
    if (this.registerForm.invalid) return;
    const attentionData = this.registerForm.getRawValue();
    this.attentionService.postAttention(attentionData).subscribe({
      next: (r) => {
        this.location.back();
      },
    });
  }

  onBack() {
    this.location.back();
  }
}
