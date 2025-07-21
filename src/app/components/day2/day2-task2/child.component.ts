import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-child2',
  templateUrl: './child.component.html',
  imports: [CommonModule],
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {
  @Input() message!: string;
  @Output() lifecycleLog = new EventEmitter<string>();

  // Array of messages to display in the template
  logs: string[] = [];

  private log(evt: string) {
    const timestamp = new Date().toLocaleTimeString();
    const entry = `${timestamp} – ${evt}`;
    // 1) to template
    this.logs.push(entry);
    // 2) to parent
    this.lifecycleLog.emit(entry);
    // 3) to console
    console.log('Child:', entry);
  }

  ngOnInit() {
    this.log(`ngOnInit: initialized with message="${this.message}"`);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['message'] && !changes['message'].isFirstChange()) {
      const prev = changes['message'].previousValue;
      const curr = changes['message'].currentValue;
      this.log(`ngOnChanges: message changed from "${prev}" to "${curr}"`);
    }
  }

  ngOnDestroy() {
    this.log(`ngOnDestroy: component is about to be destroyed`);
  }
}
