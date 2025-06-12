import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignosComponent } from './signos';

describe('Signos', () => {
  let component: SignosComponent;
  let fixture: ComponentFixture<SignosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
