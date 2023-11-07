import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private baseUrl:string = 'http://localhost:3000'

  constructor(
    private http:HttpClient
  ) { }

  getRooms():Observable<Room[]>{
    return this.http.get<Room[]>(`${this.baseUrl}/room/getRooms`)
  }

  postRoom(roomData:Room):Observable<Room>{
    return this.http.post<Room>(`${this.baseUrl}/room/createRoom`,roomData)
  }
}
