import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practicando } from './practicando';

describe('Practicando', () => {
  let component: Practicando;
  let fixture: ComponentFixture<Practicando>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practicando]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practicando);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
