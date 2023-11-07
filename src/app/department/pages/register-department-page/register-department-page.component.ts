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
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/services/user.service';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-register-department-page',
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
  templateUrl: './register-department-page.component.html',
  styleUrls: ['./register-department-page.component.css'],
})
export class RegisterDepartmentPageComponent {
  registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    desc: [''],
  });

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private location: LocationStrategy
  ) {}

  onRegister() {
    if (this.registerForm.invalid) return;
    const departmentData = this.registerForm.getRawValue();
    this.departmentService.postDepartment(departmentData).subscribe({
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
