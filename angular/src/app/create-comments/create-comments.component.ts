import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../users.service';
@Component({
  selector: 'app-create-comments',
  templateUrl: './create-comments.component.html',
  styleUrls: ['./create-comments.component.css']
})
export class CreateCommentsComponent implements OnInit{
  taskId: any='';
  user: String =this.userService.getuserdata().fullname; 
  text: String = '';
  timestamp: String='';
  commenterId: String = this.userService.getuserdata()._id;
  constructor(private http: HttpClient,private route: ActivatedRoute ,private router: Router,private userService: UserService) {}
  ngOnInit(): void {
    console.log(this.user);
    this.taskId = this.route.snapshot.paramMap.get('taskId');
    console.log('Task ID:', this.taskId);
    this.onDueDateChange() 
    console.log(this.timestamp)
  }
  onDueDateChange() {
    const currentDate: Date = new Date();
    const formattedDate: string = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} at ${currentDate
        .getHours()
        .toString()
        .padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;

    this.timestamp = formattedDate;
}

  addCommentaire() {
    const userInfo = { user: this.user,text: this.text,timestamp:this.timestamp};
    this.http.post('http://localhost:3000/task/addcomment/'+this.taskId+"/"+this.commenterId, userInfo).subscribe(
      (response: any) => {
        this.router.navigate(['/home']);
        console.log('comment created successfuly:', response);
      },
      (error: any) => {
        console.error('comment creation failed:', error);
      }
    );
  }
}