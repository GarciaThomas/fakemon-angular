import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  @Input() msg : string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
