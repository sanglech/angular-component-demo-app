import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {


  // Create array of salesperson objects

  salesPersonList:SalesPerson[]=[
    new SalesPerson("Marc","Marky","Marc@marky.com",50),
    new SalesPerson("Susan","Su","susan@su.com",10),
    new SalesPerson("Allie","Oop","allie@oop.com",250),
    new SalesPerson("Still","Dre","still@drew.com",10),
    new SalesPerson("meepo","mappo","meepo@mappo.com",5000),

  ];

  constructor() { }
  

  ngOnInit(): void {
  }

}
