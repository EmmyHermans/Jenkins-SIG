import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../config/app.constants';
import { IBook } from './books.model';

@Injectable({ providedIn: 'root' })
export class BooksService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${SERVER_API_URL}/books`);
  }
}
