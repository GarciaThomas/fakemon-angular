import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Monster } from 'src/app/classes/monster';
import { Player } from 'src/app/classes/player';

@Component({
  selector: 'combat-layout',
  templateUrl: './combat-layout.component.html',
  styleUrls: ['./combat-layout.component.css']
})
export class CombatLayoutComponent implements OnInit {


  constructor(public servPlayer?: PlayerService) { }

  ngOnInit() {
    this.servPlayer.findPlayer(1);
  }

}
