import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Login } from '../../models/login.interface';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule ,ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  private fb = inject(FormBuilder);
  private loginService = inject(LoginService);
  private router = inject(Router)

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  onLogin(){
    if(this.loginForm.invalid){
       return;
    }
    const {username, password} = this.loginForm.getRawValue();
    this.loginService.login({username:username!, password:password!}).subscribe({
      next:r=>{
        localStorage.setItem('token', r)
        this.router.navigate(['/'])
      },
      error:e=>{
        console.log(e)
      }
    })
  }
}
