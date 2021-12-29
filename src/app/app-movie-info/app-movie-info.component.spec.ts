import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMovieInfoComponent } from './app-movie-info.component';

describe('AppMovieInfoComponent', () => {
  let component: AppMovieInfoComponent;
  let fixture: ComponentFixture<AppMovieInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMovieInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMovieInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
