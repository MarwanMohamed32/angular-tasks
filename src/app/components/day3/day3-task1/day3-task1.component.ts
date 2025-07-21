import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-day3-task1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day3-task1.component.html',
})
export class Day3Task1Component implements OnInit {
  numbers$ = new Observable<number[]>((observer) => {
    observer.next([1, 2, 3, 4]);
    observer.complete();
  });
  chatSubject = new Subject<string>();
  counter$ = new BehaviorSubject<number>(0);
  currentValue = 0;

  ngOnInit() {
    this.numbers$.subscribe((nums) =>
      console.log(
        'Subscriber 1 (×2):',
        nums.map((n) => n * 2)
      )
    );
    this.numbers$.subscribe((nums) => console.log('Subscriber 2 (raw):', nums));

    this.chatSubject.subscribe((msg) =>
      console.log('Chat Subscriber 1 received:', msg)
    );
    this.chatSubject.subscribe((msg) =>
      console.log('Chat Subscriber 2 received:', msg)
    );
    this.chatSubject.next('Hello from Subject!');
    this.chatSubject.next('Another message');

    this.counter$.subscribe((value) => {
      this.currentValue = value;
      console.log('BehaviorSubject value:', value);
    });
  }

  incrementByOne() {
    const current = this.counter$.getValue();
    this.counter$.next(current + 1);
  }

  incrementByTwo() {
    const current = this.counter$.getValue();
    this.counter$.next(current + 2);
  }
}
