import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IBook } from './books.model';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  public dataSource = new MatTableDataSource<IBook>();
  public displayedColumns = ['author', 'title', 'year', 'country', 'link'];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getAll().subscribe((res) => {
      this.dataSource.data = res ?? [];
    });
  }
}
