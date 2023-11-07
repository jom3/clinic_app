import { Routes } from '@angular/router';
import { StaffPageComponent } from './pages/staff-page/staff-page.component';
import { RegisterStaffPageComponent } from './pages/register-staff-page/register-staff-page.component';

export const routes: Routes = [
  {
    path:'', component:StaffPageComponent
  },
  {
    path:'register', component:RegisterStaffPageComponent
  }
];
