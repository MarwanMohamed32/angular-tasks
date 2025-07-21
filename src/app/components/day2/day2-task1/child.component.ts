import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  standalone: true,
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @Input() user!: User;
  @Output() updatedUser = new EventEmitter<User>();

  modifyUser() {
    const newUser: User = {
      name: this.user.name + ' (Updated)',
      age: this.user.age + 1,
    };
    this.updatedUser.emit(newUser);
  }
}
