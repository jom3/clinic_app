import { Component, signal, OnInit } from '@angular/core';
import { CommonModule, LocationStrategy } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { StaffService } from '../../services/staff.service';
import { User } from 'src/app/user/models/user';
import { Department } from 'src/app/department/models/department';
import { Speciality } from 'src/app/speciality/models/speciality';
import { UserService } from 'src/app/user/services/user.service';
import { DepartmentService } from 'src/app/department/services/department.service';
import { SpecialityService } from 'src/app/speciality/services/speciality.service';

@Component({
  selector: 'app-register-staff-page',
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
  templateUrl: './register-staff-page.component.html',
  styleUrls: ['./register-staff-page.component.css'],
})
export class RegisterStaffPageComponent implements OnInit{
  public users = signal<User[]>([]);
  public departments = signal<Department[]>([]);
  public specialities = signal<Speciality[]>([]);

  registerForm: FormGroup = this.fb.group({
    user_id: ['', [Validators.required]],
    department_id: ['', [Validators.required]],
    speciality_id: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private staffService: StaffService,
    private userService:UserService,
    private departmentService:DepartmentService,
    private specialityService:SpecialityService,
    private location: LocationStrategy
  ) {}

  ngOnInit(): void {
    this.getUsers()
    this.getDepartments()
    this.getSpecialities()
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (r) => {
        this.users.set(r);
      },
    });
  }

  getDepartments() {
    this.departmentService.getDepartments().subscribe({
      next: (r) => {
        this.departments.set(r);
      },
    });
  }

  getSpecialities() {
    this.specialityService.getSpecialities().subscribe({
      next: (r) => {
        this.specialities.set(r);
      },
    });
  }

  onRegister() {
    if (this.registerForm.invalid) return;
    const staffData = this.registerForm.getRawValue();
    this.staffService.postStaff(staffData).subscribe({
      next: (r) => {
        this.location.back();
      },
    });
  }

  onBack() {
    this.location.back();
  }
}
