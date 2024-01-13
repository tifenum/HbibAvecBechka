import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  users: any[] = [];
  selectedOwner = '';
  title: string = '';
  description: string = '';
  dueDate: String = '';
  priority: string = 'low';
  status: string = 'todo';
  category: string = '';
  attachments: File | null = null; 
  constructor(
    private userService: UserService,
    private datePipe: DatePipe,
    private router: Router,
    private http: HttpClient
  ) {}

  createrId: String = this.userService.getuserdata()._id;
  creater: String = this.userService.getuserdata().fullname;

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data: any[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  onDueDateChange(event: any) {
    const selectedDateStr: string = event.target.value;
    const datePart: string = selectedDateStr.substring(0, 10);
    this.dueDate = datePart;
    console.log(this.dueDate);
  }

  createTask() {
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('description', this.description);
    formData.append('dueDate', String(this.dueDate));
    formData.append('priority', this.priority);
    formData.append('status', this.status);
    formData.append('category', this.category);
    formData.append('selectedOwner', this.selectedOwner);
    formData.append('createrId', String(this.createrId));
    formData.append('creater', String(this.creater));
    console.log(this.attachments);
    if (this.attachments) {
      formData.append('attachments', this.attachments);
    }
    this.http.post('http://localhost:3000/task/createtask', formData).subscribe(
      (response: any) => {
        this.router.navigate(['/home']);
        console.log('Task created successfully:', response);
      },
      (error: any) => {
        console.error('Task creation failed:', error);
      }
    );
  }

  selected(event: any) {
    this.attachments = event.target.files[0];
  }
}
