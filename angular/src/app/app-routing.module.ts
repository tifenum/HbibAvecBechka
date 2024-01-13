import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { CreateCommentsComponent } from './create-comments/create-comments.component';
import { UpdatingTestComponent} from './updatingtest/updatingtest.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'navbar', component: NavbarComponent},
  {path:'home', component:HomeComponent},
  {path:'createtask',component:CreateTaskComponent},
  { path: 'addcomment/:taskId', component: CreateCommentsComponent },
  {path : 'updateTask/:taskId',component:UpdatingTestComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}