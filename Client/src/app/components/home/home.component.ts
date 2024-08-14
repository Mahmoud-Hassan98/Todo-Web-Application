import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Todo } from '../../model/todo-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listOfTasks: Todo[] = [];
  
  constructor(private httpService: HttpService) {}
  
  ngOnInit(): void {
    this.fetchTasks();    
  }


  fetchTasks(): void {
    this.httpService.getTasks()
      .subscribe((tasks: Todo[]) => {
        this.listOfTasks = tasks;
      });
  }
  deleteTask(task: Todo): void {
    if (task.id) {
      this.httpService.removeTask(task.id).subscribe({
        next: () => {
          this.listOfTasks = this.listOfTasks.filter(t => t.id !== task.id);
        },
        error: (err) => {
          console.error('Failed to delete task', err);
        }
      });
    }
  }

}
