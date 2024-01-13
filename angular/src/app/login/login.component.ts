import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../users.service'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  user ={
  email:'',
  password:''}
  constructor(private http: HttpClient, private router: Router,private userService: UserService) {}
// login.component.ts
  token :any;
  login() {
    this.userService.login(this.user).subscribe(
      (response: any) => {
        this.token = response;
        localStorage.setItem('token', this.token.mytoken);
        this.router.navigate(['/home']);
      },
      (error: any) => {
        console.error('Login failed:', error);
      }
    );
  }
  goToSignUp() {
    this.router.navigate(['/register']);
  }
}