import { Component } from '@angular/core';
import { User } from '../../../models/user';
import { ChildComponent } from './child.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-parent',
  imports: [ChildComponent, CommonModule],
  templateUrl: './parent.component.html',
})
export class ParentComponent {
  user: User = { name: 'John Doe', age: 25 };
  updatedUser: User | null = null;

  onUserUpdated(user: User) {
    this.updatedUser = user;
  }
}
