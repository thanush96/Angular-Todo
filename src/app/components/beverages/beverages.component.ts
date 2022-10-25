import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css'],
})
export class BeveragesComponent implements OnInit {
  @Input() beverage = 'tea';
  @Output() newBeverageEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  addNewBeverage(value: string) {
    this.newBeverageEvent.emit(value); //get and set value
    // console.log('new value', value);
  }
}
