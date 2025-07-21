import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeatureHello } from './components/feature-hello/feature-hello';
import { User } from './models/user';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Day2Task1Component } from './components/day2/day2-task1/day2-task1.component';
import { Day2Task2Component } from './components/day2/day2-task2/day2-task2.component';
import { Day3Task1Component } from './components/day3/day3-task1/day3-task1.component';
import { Day3Task2Component } from "./components/day3/day3-task2/day3-task2.component";
import { Day3Task3Component } from "./components/day3/day3-task3/day3-task3.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FeatureHello,
    CommonModule,
    ReactiveFormsModule,
    Day2Task1Component,
    Day2Task2Component,
    Day3Task1Component,
    Day3Task2Component,
    Day3Task3Component
],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
// implements OnInit
export class App {
  protected readonly title = signal('angular-test-app');

  user1: User = { name: 'Marwan', age: 21 };
  updated!: User;

  onUserUpdated(u: User) {
    this.updated = u;
  }
}
