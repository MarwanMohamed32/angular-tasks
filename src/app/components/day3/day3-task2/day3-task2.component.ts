import { Component } from '@angular/core';
import { CourseListOneComponent } from './course-list-one.component';
import { CourseListTwoComponent } from './course-list-two.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-day3-task2',
  standalone: true,
  imports: [CourseListOneComponent, CourseListTwoComponent, RouterOutlet],
  templateUrl: './day3-task2.component.html',
})
export class Day3Task2Component {}
