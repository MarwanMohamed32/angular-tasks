// src/app/day2-task1/day2-task1.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user';

@Component({
  selector: 'app-day2-task1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day2-task1.component.html',
})
export class Day2Task1Component {
  @Input() user2!: User;
  @Output() userUpdated = new EventEmitter<User>();

  updateUser() {
    const updated: User = {
      name: this.user2.name + ' (Updated)',
      age: this.user2.age + 1,
    };
    this.userUpdated.emit(updated);
  }
}
