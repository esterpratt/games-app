import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.scss']
})
export class SimonComponent implements OnInit {
  colors = ['red', 'blue', 'green', 'yellow'];
  colorMoves: string[] = ['red'];
  colorSubject = new Subject<{colorMoves: string[]}>();
  // colorListener = this.colorSubject.asObservable();
  constructor() { }

  ngOnInit() {
    setTimeout(this.addColor.bind(this), 2000)
  }

  addColor() {
    let colorIdx = this.getRandNum(0, 3);
    this.colorMoves.push(this.colors[colorIdx]);
    this.colorSubject.next();
  }

  getRandNum(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
