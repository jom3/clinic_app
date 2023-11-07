import { Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { RegisterUserPageComponent } from './pages/register-user-page/register-user-page.component';

export const routes: Routes = [
  {
    path:'', component:UserPageComponent
  },
  {
    path:'register', component:RegisterUserPageComponent
  }
];
