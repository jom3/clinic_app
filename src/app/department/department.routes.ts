import { Routes } from '@angular/router';
import { DepartmentPageComponent } from './pages/department-page/department-page.component';
import { RegisterDepartmentPageComponent } from './pages/register-department-page/register-department-page.component';

export const routes: Routes = [
  {
    path:'', component:DepartmentPageComponent
  },
  {
    path:'register', component:RegisterDepartmentPageComponent
  }
];
