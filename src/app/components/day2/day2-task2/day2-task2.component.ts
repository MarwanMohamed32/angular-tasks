import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child.component';
import { ParentComponent } from './parent.component';

@Component({
  standalone: true,
  selector: 'app-day2-task2',
  templateUrl: './day2-task2.component.html',
  imports: [CommonModule, FormsModule, ChildComponent, ParentComponent],
})
export class Day2Task2Component {}
