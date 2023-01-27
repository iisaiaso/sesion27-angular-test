import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      // schemas: [
      //   NO_ERRORS_SCHEMA
      // ]
      imports: [FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deveria sumas 2 numeros, onCalcular(n1: number, n2: number, op: string)', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    const data = { valor1: 2, valor2: 2, op: '+' };
    const expectedResult = 4;

    const result = component.onCalcular(data.valor1, data.valor2, data.op);
    expect(result).toEqual(expectedResult);
  })

  it('Deveria restar 2 numeros, onCalcular(n1: number, n2: number, op: string)', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    const data = { valor1: 2, valor2: 1, op: '-' };
    const expectedResult = 1;

    const result = component.onCalcular(data.valor1, data.valor2, data.op);
    expect(result).toEqual(expectedResult);
  })

  it('Deveria multiplicar 2 numeros, onCalcular(n1: number, n2: number, op: string)', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    const data = { valor1: 2, valor2: 3, op: '*' };
    const expectedResult = 6;

    const result = component.onCalcular(data.valor1, data.valor2, data.op);
    expect(result).toEqual(expectedResult);
  })

  it('Deveria dividir 2 numeros, onCalcular(n1: number, n2: number, op: string)', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    const data = { valor1: 2, valor2: 1, op: '/' };
    const expectedResult = 2;

    const result = component.onCalcular(data.valor1, data.valor2, data.op);
    expect(result).toEqual(expectedResult);
  })

});
