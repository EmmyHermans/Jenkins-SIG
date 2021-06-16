import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { asyncScheduler, scheduled } from 'rxjs';
import { BooksComponent } from './books.component';
import { IBook } from './books.model';
import { BooksService } from './books.service';

const booksServiceStub = {
  getAll() {
    return scheduled([], asyncScheduler);
  },
};

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  let booksService: BooksService;
  let books: IBook[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksComponent],
      providers: [{ provide: BooksService, useValue: booksServiceStub }],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .overrideTemplate(BooksComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    books = [
      {
        author: 'Chinua Achebe',
        country: 'Nigeria',
        link: '',
        title: 'Things Fall Apart',
        year: 1958,
      },
      {
        author: 'Dante Alighieri',
        country: 'Italy',
        link: '',
        title: 'The Divine Comedy',
        year: 1315,
      },
    ];
    booksService = TestBed.inject(BooksService);
    spyOn(booksService, 'getAll').and.returnValue(
      scheduled([books], asyncScheduler)
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the books onInit', fakeAsync(() => {
    expect(booksService.getAll).not.toHaveBeenCalled();
    component.ngOnInit();
    tick();
    expect(booksService.getAll).toHaveBeenCalledTimes(1);
    expect(component.dataSource.data).toEqual(books);
  }));

  xit('should fail this test', () => {
    expect(true).toBe(false);
  });
});
