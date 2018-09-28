import { Component, OnInit, Input, Output } from '@angular/core';

import { Customer } from '../model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  @Input()
  customer: Customer;
  constructor() { }

  ngOnInit() {
  }

}
