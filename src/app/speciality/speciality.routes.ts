import { Routes } from '@angular/router';
import { SpecialityPageComponent } from './pages/speciality-page/speciality-page.component';
import { RegisterSpecialityPageComponent } from './pages/register-speciality-page/register-speciality-page.component';

export const routes: Routes = [
  {
    path:'', component:SpecialityPageComponent
  },
  {
    path:'register', component:RegisterSpecialityPageComponent
  }
];
