import { Routes } from '@angular/router';
import { HomePageComponent } from './home/pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path:'', component:HomePageComponent, loadChildren:()=>import('./home/home.routes').then(r=>r.routes)
  },
  {
    path:'login', loadChildren:()=>import('./login/login.routes').then(r=>r.routes)
  }
];
