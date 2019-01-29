import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'color-pick',
  templateUrl: './color-pick.component.html',
  styleUrls: ['./color-pick.component.scss']
})
export class ColorPickComponent implements OnInit {
  @Input() color: string;
  @Output() colorPicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onPicked() {
    this.colorPicked.emit();
  }
}
