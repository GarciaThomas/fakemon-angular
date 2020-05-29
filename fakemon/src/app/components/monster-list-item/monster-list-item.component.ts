import { Component, OnInit, Input } from '@angular/core';
import { Monster } from 'src/app/classes/monster';

@Component({
  selector: 'monster-list-item,[monster-list-item]',
  templateUrl: './monster-list-item.component.html',
  styleUrls: ['./monster-list-item.component.css']
})
export class MonsterListItemComponent implements OnInit {
  @Input() monster : Monster
  constructor() { }

  ngOnInit(): void {
    console.log(this.monster)
  }

}
