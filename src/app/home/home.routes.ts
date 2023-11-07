import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'user', loadChildren:()=>import('../user/user.routes').then(r=>r.routes)
  },
  {
    path:'department', loadChildren:()=>import('../department/department.routes').then(r=>r.routes)
  },
  {
    path:'speciality', loadChildren:()=>import('../speciality/speciality.routes').then(r=>r.routes)
  },
  {
    path:'staff', loadChildren:()=>import('../staff/staff.routes').then(r=>r.routes)
  },
  {
    path:'illness', loadChildren:()=>import('../illness/illness.routes').then(r=>r.routes)
  },
  {
    path:'attention', loadChildren:()=>import('../attention/attention.routes').then(r=>r.routes)
  },
  {
    path:'room', loadChildren:()=>import('../room/room.routes').then(r=>r.routes)
  }
];
