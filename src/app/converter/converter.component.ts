import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  amount = 1;
  from = 'PHP';
  to = 'USD';
  rate = 0.021;

  convert(): number {
    return this.amount * this.rate;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
