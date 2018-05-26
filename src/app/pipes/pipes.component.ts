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
  constructor() { }

  ngOnInit() {
  }
}
