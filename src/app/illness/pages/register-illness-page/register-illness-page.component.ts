import { Component } from '@angular/core';
import { CommonModule, LocationStrategy } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IllnessService } from '../../services/illness.service';

@Component({
  selector: 'app-register-illness-page',
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
  templateUrl: './register-illness-page.component.html',
  styleUrls: ['./register-illness-page.component.css'],
})
export class RegisterIllnessPageComponent {
  registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    desc: [''],
  });

  constructor(
    private fb: FormBuilder,
    private illnessService: IllnessService,
    private location: LocationStrategy
  ) {}

  onRegister() {
    if (this.registerForm.invalid) return;
    const illnessData = this.registerForm.getRawValue();
    this.illnessService.postIllness(illnessData).subscribe({
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
