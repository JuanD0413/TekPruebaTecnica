import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reto2Component } from './reto2.component';

describe('Reto2Component', () => {
  let component: Reto2Component;
  let fixture: ComponentFixture<Reto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reto2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
