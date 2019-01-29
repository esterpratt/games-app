import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simon-console',
  templateUrl: './simon-console.component.html',
  styleUrls: ['./simon-console.component.scss']
})
export class SimonConsoleComponent implements OnInit {
  colors = ['red', 'blue', 'green', 'yellow'];
  selectedColor: string;
  constructor() { }

  ngOnInit() {
  }

  colorPicked(color: string): void {
    this.selectedColor = color;
  }
}
