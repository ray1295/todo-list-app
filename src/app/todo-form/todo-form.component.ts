import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { TodoService } from '../services/todo.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './todo-form.component.html',
})
export class TodoFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private todoService: TodoService, private router: Router) {
    this.form = this.fb.group({
      summary: ['', [Validators.required, Validators.maxLength(30)]],
      description: [''],
      completeBy: [''],
      priority: [2, Validators.required],
    });
  }

  submit(): void {
    if (this.form.valid) {
      const { summary, description, completeBy, priority } = this.form.value;
      const newTodo = {
        id: uuid(),
        summary: summary!,
        description: description || undefined,
        completeBy: completeBy ? new Date(completeBy) : new Date(Date.now() + 3 * 86400000),
        priority: priority as 1 | 2 | 3,
        isCompleted: false,
      };

      this.todoService.addTodo(newTodo).subscribe(() => {
        alert('Task added!');
        this.form.reset({ priority: 2 });
        this.router.navigate(['/dashboard']);  // ✅ navigate back after adding
      });
    } else {
      alert('Check your input!');
    }
  }
}
