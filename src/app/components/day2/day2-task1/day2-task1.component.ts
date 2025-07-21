import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-day2-task1',
  standalone: true,
  imports: [CommonModule, ParentComponent, ChildComponent],
  templateUrl: './day2-task1.component.html',
})
export class Day2Task1Component {}
