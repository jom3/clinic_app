import { Routes } from '@angular/router';
import { IllnessPageComponent } from './pages/illness-page/illness-page.component';
import { RegisterIllnessPageComponent } from './pages/register-illness-page/register-illness-page.component';

export const routes: Routes = [
  {
    path:'', component:IllnessPageComponent
  },
  {
    path:'register', component:RegisterIllnessPageComponent
  }
];
