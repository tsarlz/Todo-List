import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { MyTodosComponent } from './pages/my-todos/my-todos.component';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { UserTodosComponent } from './pages/admin/user-todos/user-todos.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    children: [
      {
        path: 'my-todos',
        component: MyTodosComponent,
      },
      {
        path: 'admin',
        component: AdminComponent,
      },
      {
        path: 'admin/user-todos',
        component: UserTodosComponent,
      },
    ],
  },
];
