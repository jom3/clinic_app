import { Routes } from '@angular/router';
import { AttentionPageComponent } from './pages/attention-page/attention-page.component';
import { RegisterAttentionPageComponent } from './pages/register-attention-page/register-attention-page.component';

export const routes: Routes = [
  {
    path:'', component:AttentionPageComponent
  },
  {
    path:'register', component:RegisterAttentionPageComponent
  }
];
