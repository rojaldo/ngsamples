import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  
  @Output() onClickEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(value: any) {
    console.log(value);
    this.onClickEvent.emit(value);
  }

}
