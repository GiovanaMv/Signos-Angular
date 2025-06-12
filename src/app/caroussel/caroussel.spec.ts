import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousselComponent } from './caroussel';

describe('Caroussel', () => {
  let component: CarousselComponent;
  let fixture: ComponentFixture<CarousselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarousselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
