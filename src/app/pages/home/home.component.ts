import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numero1 = 0
  numero2 = 0
  result: any
  option!: string
  ngOnInit() {
    // console.log(this.onCalcular(2, 2, '+'));
  }
  onCalcular(n1: number, n2: number, op: string): any {
    console.log(n1, n1, op)
    if (op == '+') {
      return this.result = n1 + n2
    } else if (op == '-') {
      return this.result = n1 - n2
    } else if (op == '*') {
      return this.result = n1 * n2
    } else if (op == '/') {
      return this.result = n1 / n2
    }
  }

}
