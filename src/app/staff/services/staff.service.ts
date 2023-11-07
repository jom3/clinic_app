import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from '../models/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private baseUrl:string = 'http://localhost:3000'

  constructor(
    private http:HttpClient
  ) { }

  getStaffs():Observable<Staff[]>{
    return this.http.get<Staff[]>(`${this.baseUrl}/staff/getStaffs`)
  }

  postStaff(staffData:Staff):Observable<Staff>{
    return this.http.post<Staff>(`${this.baseUrl}/staff/createStaff`,staffData)
  }
}
