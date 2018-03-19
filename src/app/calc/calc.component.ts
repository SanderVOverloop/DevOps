import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  weight: number;
  length: number;
  gender: string;
  age: number;
  bmi: number;

  constructor() { }

  ngOnInit() {
  }

  calcBmi(){
    var l = this.length/100;
    this.BMI = this.gewicht/(l*l);
  }

  set gewicht(value: number){
    this.weight = value;
  }
  get gewicht(){
    return this.weight;
  }

  set lengte(value: number){
    this.length = value;
  }
  get lengte(){
    return this.length;
  }

  set BMI(value: number){
    this.bmi = value;
  }
  get BMI(){
    if (this.bmi)
    return this.bmi;
  }

  get bmiIndex(){
    if (this.bmi)
    return "Uw BMI is: " + this.bmi.toFixed(2);
  }
}
