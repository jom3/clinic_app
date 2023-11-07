import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Illness } from '../models/illness';

@Injectable({
  providedIn: 'root'
})
export class IllnessService {
  private baseUrl:string = 'http://localhost:3000'

  constructor(
    private http:HttpClient
  ) { }

  getIllness():Observable<Illness[]>{
    return this.http.get<Illness[]>(`${this.baseUrl}/illness/getIllness`)
  }

  postIllness(illnessData:Illness):Observable<Illness>{
    return this.http.post<Illness>(`${this.baseUrl}/illness/createIllness`,illnessData)
  }
}
