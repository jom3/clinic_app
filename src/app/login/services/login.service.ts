import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login.interface';
import { Observable, map } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl:string;

  constructor(
    private http:HttpClient
  ) {
    this.baseUrl='http://localhost:3000'
  }

  login(loginData:Login): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/auth/login`, loginData)
  }
}
