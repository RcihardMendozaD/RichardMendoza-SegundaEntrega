import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminUserComponent } from './app-admin-user.component';

describe('AppAdminUserComponent', () => {
  let component: AppAdminUserComponent;
  let fixture: ComponentFixture<AppAdminUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAdminUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
