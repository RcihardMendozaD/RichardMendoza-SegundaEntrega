import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShopingCarComponent } from './app-shoping-car.component';

describe('AppShopingCarComponent', () => {
  let component: AppShopingCarComponent;
  let fixture: ComponentFixture<AppShopingCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppShopingCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppShopingCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
