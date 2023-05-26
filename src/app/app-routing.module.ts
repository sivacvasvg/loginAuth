import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAuthComponent } from './login-auth/login-auth.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'login',component:LoginAuthComponent},
  { path: 'user-list', component: UserListComponent,canActivate:[AuthGuard]  },
  { path:'user-details/:id',component:UserDetailsComponent,canActivate:[AuthGuard]},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
