import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model/todo-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string = 'http://localhost:8080/todo/';

  constructor(private http: HttpClient) { }

  public getTasks(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url + 'get-all-todo-list');
  }
  public removeTask(id : number){
    return this.http.delete<Todo[]>(this.url + 'delete-todo/'+id);
  }   
}
