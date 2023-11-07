import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attention } from '../models/attention';

@Injectable({
  providedIn: 'root'
})
export class AttentionService {
  private baseUrl:string = 'http://localhost:3000'

  constructor(
    private http:HttpClient
  ) { }

  getAttentions():Observable<Attention[]>{
    return this.http.get<Attention[]>(`${this.baseUrl}/attention/getAttentions`)
  }

  postAttention(attentionData:Attention):Observable<Attention>{
    return this.http.post<Attention>(`${this.baseUrl}/attention/createAttention`,attentionData)
  }

  serveAttention(id:string){
    return this.http.delete(`${this.baseUrl}/attention/serveAttention/${id}`)
  }
}
