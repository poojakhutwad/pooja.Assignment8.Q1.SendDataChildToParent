import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() obj = new EventEmitter();
  

  constructor() { }
  
  SendText(data:any){
    debugger;
    this.obj.emit(data);
    debugger;
  }

  ngOnInit() {
  }

}
