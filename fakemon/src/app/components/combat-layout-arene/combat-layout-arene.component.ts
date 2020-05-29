import { Component, OnInit, Input } from '@angular/core';
import { Monster } from 'src/app/classes/monster';
import { Player } from 'src/app/classes/player';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-combat-layout-arene',
  templateUrl: './combat-layout-arene.component.html',
  styleUrls: ['./combat-layout-arene.component.css']
})
export class CombatLayoutAreneComponent implements OnInit {


  player : Player = null
  @Input() monstreAttaquant : Monster = null
  @Input() monstreDefenseur : Monster = null

  constructor(private gameScreen : GameComponent) { }

  ngOnInit(): void {
    this.player = this.gameScreen.player
  }

  

}
