import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child.component';

@Component({
  standalone: true,
  selector: 'app-parent2',
  templateUrl: './parent.component.html',
  imports: [CommonModule, FormsModule, ChildComponent],
})
export class ParentComponent {
  parentMessage = 'Hello, child!';
  showChild = true;
  logs: string[] = [];

  onChildLog(logEntry: string) {
    this.logs.push(logEntry);
    console.log('Parent received:', logEntry);
  }
}
