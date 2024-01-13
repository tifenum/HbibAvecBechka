import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = 'http://localhost:3000/task/getAlltasks'; 

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getTaskById(taskId: string): Observable<any> {
    return this.http.get<any>("http://localhost:3000/task/gettaskbyid/"+taskId);
  }
  updateTask(taskId: string, updatedData: any): Observable<any> {
    console.log(taskId,updatedData);
    return this.http.put<any>("http://localhost:3000/task/updatetask/"+taskId, updatedData);
  }
}
