import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../config/app.constants';
import { IMovie } from './movies.model';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(`${SERVER_API_URL}/movies`);
  }
}
