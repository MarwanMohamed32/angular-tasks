import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from './api-response.interface';

export interface Item { id: number; name: string; }

@Injectable({ providedIn: 'root' })
export class ItemService {
  private baseUrl = 'http://localhost:3000/items';

  constructor(private http: HttpClient) {}

  getItems(): Observable<ApiResponse<Item[]>> {
    const headers = new HttpHeaders().set('X-My-Header', '123');
    const params  = new HttpParams().set('showDeleted', 'false');
    return this.http.get<ApiResponse<Item[]>>(this.baseUrl, { headers, params });
  }

  create(item: Item): Observable<ApiResponse<Item>> {
    return this.http.post<ApiResponse<Item>>(this.baseUrl, item);
  }

  delete(id: number): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.baseUrl}/${id}`);
  }
}
