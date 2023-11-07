import { Routes } from '@angular/router';
import { RoomPageComponent } from './pages/room-page/room-page.component';
import { RegisterRoomPageComponent } from './pages/register-room-page/register-room-page.component';

export const routes: Routes = [
  {
    path:'', component:RoomPageComponent
  },
  {
    path:'register', component:RegisterRoomPageComponent
  }
];
