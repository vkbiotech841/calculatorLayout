import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {



  constructor() { }


  ngOnInit() {
  }

  calculatorText: any[] = [
    {
      "name": "AC",
      "buttonBg": "cal-btn-grey"
    },
    {
      "name": "log",
      "buttonBg": "cal-btn"
    },
    {
      "name": "log",
      "buttonBg": "cal-btn"
    },
    {
      "name": "In",
      "buttonBg": "cal-btn"
    },
    {
      "name": "(",
      "buttonBg": "cal-btn"
    },
    {
      "name": ")",
      "buttonBg": "cal-btn"
    },
    {
      "name": "7",
      "buttonBg": "cal-btn-white"
    },
    {
      "name": "8",
      "buttonBg": "cal-btn-white"
    },
    {
      "name": "9",
      "buttonBg": "cal-btn-white"
    },
    {
      "name": "remove",
      "buttonBg": "cal-btn-grey"
    },
    {
      "name": "[ ]",
      "buttonBg": "cal-btn"
    },
    {
      "name": "1",
      "buttonBg": "cal-btn"
    },
    {
      "name": "1",
      "buttonBg": "cal-btn"
    },
    {
      "name": "1",
      "buttonBg": "cal-btn"
    },
    {
      "name": "1",
      "buttonBg": "cal-btn"
    },
    {
      "name": "1",
      "buttonBg": "cal-btn"
    },
    {
      "name": "4",
      "buttonBg": "cal-btn-white"
    },
    {
      "name": "5",
      "buttonBg": "cal-btn-white"
    },
    {
      "name": "6",
      "buttonBg": "cal-btn-white"
    },
    {
      "name": "/",
      "buttonBg": "cal-btn"
    },
    {
      "name": "≤",
      "buttonBg": "cal-btn"
    },
    {
      "name": "≥",
      "buttonBg": "cal-btn"
    },
    {
      "name": "1",
      "buttonBg": "cal-btn"
    },
    {
      "name": "1",
      "buttonBg": "cal-btn"
    },
    {
      "name": "%",
      "buttonBg": "cal-btn"
    },
    {
      "name": "Θ",
      "buttonBg": "cal-btn"
    },
    {
      "name": "1",
      "buttonBg": "cal-btn-white"
    },
    {
      "name": "2",
      "buttonBg": "cal-btn-white"
    },
    {
      "name": "3",
      "buttonBg": "cal-btn-white"
    },
    {
      "name": "X",
      "buttonBg": "cal-btn"
    },
    {
      "name": "<",
      "buttonBg": "cal-btn"
    },
    {
      "name": ">",
      "buttonBg": "cal-btn"
    },
    {
      "name": "1",
      "buttonBg": "cal-btn"
    },
    {
      "name": "power",
      "buttonBg": "cal-btn"
    },
    {
      "name": "x",
      "buttonBg": "cal-btn"
    },
    {
      "name": "i",
      "buttonBg": "cal-btn"
    },
    {
      "name": "0",
      "buttonBg": "cal-btn-white"
    },
    {
      "name": ".",
      "buttonBg": "cal-btn-white"
    },
    {
      "name": "+",
      "buttonBg": "cal-btn"
    },
    {
      "name": "-",
      "buttonBg": "cal-btn"
    },
    {
      "name": "<-",
      "buttonBg": "cal-btn-grey"
    },
    {
      "name": "->",
      "buttonBg": "cal-btn-grey"
    },
    {
      "name": "LCM",
      "buttonBg": "cal-btn"
    },
    {
      "name": "root",
      "buttonBg": "cal-btn"
    },
    {
      "name": "y",
      "buttonBg": "cal-btn"
    },
    {
      "name": "1",
      "buttonBg": "cal-btn"
    },
    {
      "name": ",",
      "buttonBg": "cal-btn"
    },
    {
      "name": "=",
      "buttonBg": "cal-btn"
    },
    {
      "name": "bsp",
      "buttonBg": "cal-btn"
    },
    {
      "name": "Enter",
      "buttonBg": "cal-btn-primary"
    },


  ];





  calculatorStatus: boolean = false;

  showCalculator() {
    this.calculatorStatus = !this.calculatorStatus
  };


  textCollection: any[] = [];
  singleText: string;

  displayClickText(i) {
    this.singleText = this.calculatorText[i].name;
    this.textCollection.push(this.singleText);
  };





}
