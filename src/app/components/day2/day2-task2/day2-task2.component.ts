import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-day2-task2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './day2-task2.component.html',
})
export class Day2Task2Component implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      age: [''],
    });
  }

  get name() {
    return this.userForm.get('name')!;
  }
  get email() {
    return this.userForm.get('email')!;
  }
  get password() {
    return this.userForm.get('password')!;
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
}
