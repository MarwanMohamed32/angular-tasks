import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeatureHello } from './components/feature-hello/feature-hello';
import { ChildComponent } from './components/child/child';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './models/user';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
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
    ChildComponent,
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

  //   // Day 2 Task 2
  //   userForm!: FormGroup;

  //   constructor(private fb: FormBuilder) {}

  //   ngOnInit() {
  //     this.userForm = this.fb.group({
  //       name: ['', [Validators.required, Validators.minLength(3)]],
  //       email: ['', [Validators.required, Validators.email]],
  //       password: ['', Validators.required],
  //       age: [''],
  //     });
  //   }

  //   get name() {
  //     return this.userForm.get('name')!;
  //   }

  //   get email() {
  //     return this.userForm.get('email')!;
  //   }

  //   get password() {
  //     return this.userForm.get('password')!;
  //   }

  //   onSubmit() {
  //     if (this.userForm.valid) {
  //       console.log(this.userForm.value);
  //     }
  //   }

  // Day 3 On Hands Task
  //   numbers$: Observable<number[]> = new Observable((observer) => {
  //     observer.next([1, 2, 3, 4]);
  //     observer.complete();
  //   });

  //   chatSubject = new Subject<string>();

  //   counter$ = new BehaviorSubject<number>(0);
  //   currentValue = 0;

  //   ngOnInit() {

  //     this.numbers$.subscribe((nums) => {
  //       console.log(
  //         'Subscriber 1 (×2):',
  //         nums.map((n) => n * 2)
  //       );
  //     });
  //     this.numbers$.subscribe((nums) => {

  //       console.log('Subscriber 2 (raw):', nums);
  //     });

  //     this.chatSubject.subscribe((msg) =>
  //       console.log('Chat Subscriber 1 received:', msg)
  //     );
  //     this.chatSubject.subscribe((msg) =>
  //       console.log('Chat Subscriber 2 received:', msg)
  //     );

  //     this.chatSubject.next('Hello from Subject!');
  //     this.chatSubject.next('Another message');

  //     this.counter$.subscribe((value) => {
  //       this.currentValue = value;
  //       console.log('BehaviorSubject value:', value);
  //     });
  //   }

  //   incrementByOne() {
  //     const current = this.counter$.getValue();
  //     this.counter$.next(current + 1);
  //     console.log()
  //   }

  //   incrementByTwo() {
  //     const current = this.counter$.getValue();
  //     this.counter$.next(current + 2);
  //   }

  // Day 3 On Hands Task 2
}
