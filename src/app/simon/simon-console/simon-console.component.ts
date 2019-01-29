import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'simon-console',
  templateUrl: './simon-console.component.html',
  styleUrls: ['./simon-console.component.scss']
})
export class SimonConsoleComponent implements OnInit {
  @Input() colors: string[];
  @Input() colorMoves: Observable<string[]>;
  selectedColor: string;
  constructor() { }

  ngOnInit() {
    console.log(this.colorMoves);
    
    this.colorMoves.subscribe(data => {
      console.log(data);
      
    })
  }



  colorPicked(color: string): void {
    this.selectedColor = color;
  }
}
