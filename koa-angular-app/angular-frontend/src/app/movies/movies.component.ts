import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IMovie } from './movies.model';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  public dataSource = new MatTableDataSource<IMovie>();
  public displayedColumns = ['rank', 'title'];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getAll().subscribe((res) => {
      this.dataSource.data = res ?? [];
    });
  }
}
