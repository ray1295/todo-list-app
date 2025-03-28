import { Component, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../services/todo.service';
import { TodoItem } from '../models/todo-item';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  todos = computed(() => this.todoService.todos());

  unfinishedTodos = computed(() => {
    return this.todos()
      .filter(t => !t.isCompleted)
      .sort((a, b) => a.priority - b.priority || this.deadline(a) - this.deadline(b))
  })

  completedTodos = computed(() => {
    return this.todos().filter(t => t.isCompleted);
  })

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe();
  }

  deadline(todo: TodoItem): number {
    return todo.completeBy ? new Date(todo.completeBy).getTime() : Infinity;
  }

  isUrgent(todo: TodoItem) {
    return todo.priority === 1 && todo.completeBy
      ? (new Date(todo.completeBy).getTime() - Date.now()) <= 86400000
      : false;
  }

  markCompleted(todo: TodoItem): void {
    this.todoService.updateTodo({ ...todo, isCompleted: true }).subscribe();
  }

  undoCompleted(todo: TodoItem): void {
    if (confirm('Undo completion?')) {
      this.todoService.updateTodo({ ...todo, isCompleted: false }).subscribe();
    }
  }

  deleteTodo(id: string): void {
    if (confirm('Delete this task?')) {
      this.todoService.deleteTodo(id).subscribe()
    }
  }
}
