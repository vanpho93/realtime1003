import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  myDate = new Date();
  teo = { name: 'Teo', age: 10 };
  name = 'Nguyen Van tEo';
  height = 1.81;
  constructor() { }

  ngOnInit() {
  }
}
