import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  numero1!: string
  numero2!: string
  result!: any
  option!: string

  onCalcular() {
    if (this.option == '+') {
      this.result = Number(this.numero1) + Number(this.numero2)
    } else if (this.option == '-') {
      this.result = Number(this.numero1) + Number(this.numero2)
    } else if (this.option == '*') {
      this.result = Number(this.numero1) + Number(this.numero2)
    } else if (this.option == '/') {
      this.result = Number(this.numero1) + Number(this.numero2)
    } else {
      this.result = "Ingrese una opcion"
    }
  }

}
