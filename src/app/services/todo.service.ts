import { Injectable, signal } from '@angular/core';
import { TodoItem } from '../models/todo-item';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = signal<TodoItem[]>([]);

  private apiDelay = 2000;

  getTodos(): Observable<TodoItem[]> {
    return of(this.todos()).pipe(delay(this.apiDelay));
  }

  addTodo(todo: TodoItem): Observable<boolean> {
    return of(true).pipe(
      delay(this.apiDelay),
      tap(() => this.todos.update(todos => [...todos, todo]))
    );
  }

  updateTodo(updatedTodo: TodoItem): Observable<boolean> {
    return of(true).pipe(
      delay(this.apiDelay),
      tap(() => this.todos.update(todos => todos.map(t => t.id === updatedTodo.id ? updatedTodo : t)))
    );
  }

  deleteTodo(id: string): Observable<boolean> {
    return of(true).pipe(
      delay(this.apiDelay),
      tap(() => this.todos.update(todos => todos.filter(t => t.id !== id)))
    );
  }
}
