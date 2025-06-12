import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompatibilidadeComponent } from './compatibilidade';

describe('Compatibilidade', () => {
  let component: CompatibilidadeComponent;
  let fixture: ComponentFixture<CompatibilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompatibilidadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompatibilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
