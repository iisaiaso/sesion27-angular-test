import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Sesion 27 - Angular Test';
  numero1 = 0
  numero2 = 0
  result !: any
  cadena!: string
  option!: string
  ngOnInit() {
    // console.log(this.onCalcular(2, 2, '+'));
  }
  onCalcular(n1: number, n2: number, op: string): any {
    n1 = Number(n1)
    n2 = Number(n2)
    console.log(n1, op)
    console.log('****************');
    console.log(n2);

    if (op == '+') {
      this.cadena = 'La suma es: '
      return this.result = n1 + n2

    } else if (op == '-') {
      this.cadena = 'La resta es: '
      return this.result = n1 - n2

    } else if (op == '*') {
      this.cadena = 'La multiplicacion es: '
      return this.result = n1 * n2

    } else if (op == '/') {
      this.cadena = 'La division es: '
      this.result = n1 / n2
      console.log(this.result);
      if (Number.isNaN(this.result)) {
        this.result = 'No se puede dividir'
      }
      return this.result

    }
  }

}
