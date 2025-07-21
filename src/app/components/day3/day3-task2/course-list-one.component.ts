// src/app/day3-task2/course-list-one.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-list-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list-one.component.html',
})
export class CourseListOneComponent implements OnInit {
  courses: string[] = [];

  constructor(private courseSvc: CourseService) {}

  ngOnInit() {
    this.courses = this.courseSvc.getCourses();
  }
}
