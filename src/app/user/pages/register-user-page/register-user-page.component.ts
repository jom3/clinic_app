import { Component } from '@angular/core';
import { CommonModule, LocationStrategy } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user-page',
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
  providers:[
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' }
  ],
  templateUrl: './register-user-page.component.html',
  styleUrls: ['./register-user-page.component.css'],
})
export class RegisterUserPageComponent {
  registerForm: FormGroup = this.fb.group({
    firts_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    age: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    birthday: ['', [Validators.required]],
    email: ['', [Validators.required]],
    address: ['', [Validators.required]],
    telephone: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private userService:UserService,
    private router:Router,
    private location:LocationStrategy
    ) {}

  onRegister(){
    if(this.registerForm.invalid) return;
    const userData = this.registerForm.getRawValue()
    this.userService.postUser(userData).subscribe({
      next:r=>{
        console.log(r)
        this.location.back()
      }
    })
  }

  onBack(){
    this.location.back()
  }
}
