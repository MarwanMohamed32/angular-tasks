// src/app/services/course.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: string[] = [
    'Introduction to Angular',
    'Components & Templates',
    'Reactive Forms',
    'Routing & Navigation'
  ];

  getCourses(): string[] {
    return this.courses;
  }
}
