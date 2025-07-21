import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feature-hello',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './feature-hello.html',
  styleUrl: './feature-hello.scss',
})
export class FeatureHello {
  title: String = 'Welcome To Angular!';
  imageUrl: String = 'assets/images/angular-logo.png';
  count: number = 0;
  username = '';

  incrementCount() {
    this.count++;
  }

}
