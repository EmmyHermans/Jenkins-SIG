import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { asyncScheduler, scheduled } from 'rxjs';
import { MoviesComponent } from './movies.component';
import { IMovie } from './movies.model';
import { MoviesService } from './movies.service';

const moviesServiceStub = {
  getAll() {
    return scheduled([], asyncScheduler);
  },
};

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let moviesService: MoviesService;
  let movies: IMovie[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesComponent],
      providers: [{ provide: MoviesService, useValue: moviesServiceStub }],
    })
      .overrideTemplate(MoviesComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    movies = [
      { id: '1', rank: 1, title: 'The Shawshank Redemption' },
      { id: '2', rank: 2, title: 'The Godfather' },
    ];
    moviesService = TestBed.inject(MoviesService);
    spyOn(moviesService, 'getAll').and.returnValue(
      scheduled([movies], asyncScheduler)
    );
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load the movies onInit', fakeAsync(() => {
    expect(moviesService.getAll).not.toHaveBeenCalled();
    component.ngOnInit();
    tick();
    expect(moviesService.getAll).toHaveBeenCalledTimes(1);
    expect(component.dataSource.data).toEqual(movies);
  }));

  it('should fail this test', () => {
    expect(true).toBe(false);
  });
});
