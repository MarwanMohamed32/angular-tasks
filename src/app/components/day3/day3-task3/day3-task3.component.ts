import { Component, OnInit } from '@angular/core';
import { ItemService, Item } from './item.service';
import { LoadingInterceptor } from './loading.interceptor';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-day3-task3',
  templateUrl: './day3-task3.component.html',
})
export class Day3Task3Component {
  items: Item[] = [];
  loading$: Observable<boolean>;

  constructor(private svc: ItemService, private loader: LoadingInterceptor) {
    this.loading$ = this.loader.isLoading;
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.svc.getItems().subscribe((res) => (this.items = res.data));
  }

  add() {
    const newItem: Item = { id: Date.now(), name: 'New Item' };
    this.svc.create(newItem).subscribe(() => this.load());
  }

  remove(id: number) {
    this.svc.delete(id).subscribe(() => this.load());
  }
}
