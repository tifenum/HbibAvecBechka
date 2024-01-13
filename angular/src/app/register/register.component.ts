import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  lastname: string = ''
  age: number = 0
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient ,private router: Router) {}

  register() {
    const userInfo = { name: this.name,lastname: this.lastname,age: this.age, email: this.email, password: this.password };
    this.http.post('http://localhost:3000/user/register', userInfo).subscribe(
      (response: any) => {
        console.log('Registration successful:', response);
        this.router.navigate(['/login']);

      },
      (error: any) => {
        console.error('Registration failed:', error);
      }
    );
  }
}
