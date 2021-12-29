import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWelcomeToStarComponent } from './app-welcome-to-star.component';

describe('AppWelcomeToStarComponent', () => {
  let component: AppWelcomeToStarComponent;
  let fixture: ComponentFixture<AppWelcomeToStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppWelcomeToStarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWelcomeToStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
