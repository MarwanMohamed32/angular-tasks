// src/app/day3-task2/course-list-two.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-list-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list-two.component.html',
})
export class CourseListTwoComponent implements OnInit {
  courses: string[] = [];

  constructor(private courseSvc: CourseService) {}

  ngOnInit() {
    this.courses = this.courseSvc.getCourses();
  }
}
