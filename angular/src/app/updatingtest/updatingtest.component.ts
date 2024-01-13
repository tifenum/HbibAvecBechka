import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import { UserService } from '../users.service';

@Component({
  selector: 'app-updatingtest',
  templateUrl: './updatingtest.component.html',
  styleUrls: ['./updatingtest.component.css']
})
export class UpdatingTestComponent implements OnInit {
  taskId: any='';
  updatedTask: any = {}; 
  users: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TasksService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('taskId');
    console.log(this.taskId);
    this.taskService.getTaskById(this.taskId).subscribe(
      (task: any) => {
        this.updatedTask = task;
        console.log(this.updatedTask);
      },
      (error) => {
        console.error('Error fetching task details:', error);
      }
    );
    this.userService.getUsers().subscribe(
      (data: any[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  updateTask(): void {
    this.taskService.updateTask(this.taskId, this.updatedTask).subscribe(
      () => {
        console.log('Task updated successfully');
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error updating task:', error);
      }
    );
  }
}
