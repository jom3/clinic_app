import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Speciality } from '../models/speciality';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {
  private baseUrl:string = 'http://localhost:3000'

  constructor(
    private http:HttpClient
  ) { }

  getSpecialities():Observable<Speciality[]>{
    return this.http.get<Speciality[]>(`${this.baseUrl}/speciality/getSpecialities`)
  }

  postSpeciality(specialityData:Speciality):Observable<Speciality>{
    return this.http.post<Speciality>(`${this.baseUrl}/speciality/createSpeciality`,specialityData)
  }
}
