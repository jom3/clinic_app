import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl:string = 'http://localhost:3000'

  constructor(
    private http:HttpClient
  ) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/user/getUsers`)
  }

  postUser(userData:User):Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/user/createUser`,userData)
  }
}
