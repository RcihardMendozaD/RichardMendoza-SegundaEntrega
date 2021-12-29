import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderLoginComponent } from './app-header-login.component';

describe('AppHeaderLoginComponent', () => {
  let component: AppHeaderLoginComponent;
  let fixture: ComponentFixture<AppHeaderLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHeaderLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
