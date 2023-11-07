import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../models/department';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseUrl:string = 'http://localhost:3000'

  constructor(
    private http:HttpClient
  ) { }

  getDepartments():Observable<Department[]>{
    return this.http.get<Department[]>(`${this.baseUrl}/department/getDepartments`)
  }

  postDepartment(departmentData:Department):Observable<Department>{
    return this.http.post<Department>(`${this.baseUrl}/department/createDepartment`,departmentData)
  }
}
