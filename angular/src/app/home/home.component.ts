import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../users.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tasks: any[] = [];
  constructor(private userService: UserService,private taskService: TasksService,private http: HttpClient, private router: Router) { }
  currentuserId :String=this.userService.getuserdata()._id;
  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (data: any[]) => {
        this.tasks = data.map(task =>{
          return{
            ...task,
             attachments: task.attachments ? this.createFileURL(task.attachments) : null,

          }
        });
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  createFileURL(filename: string): string {
    return `http://localhost:3000/uploads/${filename}`;
  }
  createTask(){
    this.router.navigate(['/createtask']);
  }
  deletetask(taskId:String){
    
    this.http.delete("http://localhost:3000/task/deletetask/"+taskId+"/"+this.currentuserId).subscribe(
      () => {
        console.log('Task deleted successfully');
        this.tasks = this.tasks.filter(task => task._id !== taskId);
      },
      (error) => {
        console.error('Error deleting task:', error);
      }
    );
  }
  deletecomment(taskId:String,commentId:String){
    this.http.delete("http://localhost:3000/task/deletecomment/"+taskId+"/"+commentId).subscribe(() => {
          console.log('Comment deleted successfully');
          const taskIndex = this.tasks.findIndex(task => task._id === taskId);
          if (taskIndex !== -1) {
              const commentIndex = this.tasks[taskIndex].comments.findIndex((comment: { _id: String; }) => comment._id === commentId);
              if (commentIndex !== -1) {
                this.tasks[taskIndex].comments.splice(commentIndex, 1);
            }
            }
        },
        (error) => {
          console.error('Error deleting comment:', error);
        }
      );
    } 
  }