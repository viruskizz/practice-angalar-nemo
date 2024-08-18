import { Routes } from '@angular/router';
import { MembersComponent } from './pages/members/members.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'members',
    component: MembersComponent,
  }
];
