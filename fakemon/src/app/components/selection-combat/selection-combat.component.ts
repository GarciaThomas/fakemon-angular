import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/classes/player';
import { Monster } from 'src/app/classes/monster';
import { SceneComponent } from '../scene/scene.component';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'selection-combat',
  templateUrl: './selection-combat.component.html',
  styleUrls: ['./selection-combat.component.css']
})
export class SelectionCombatComponent implements OnInit {

  @Input() player : Player

  monster : Monster

  constructor(private gamescreen : GameComponent) { }

  ngOnInit(){

  }


  selected(){
    console.log("chosen one")
    console.log(this.monster)
    this.gamescreen.monstreJoueur = this.monster
    this.gamescreen.combatTriggered = false
    this.gamescreen.booleanCombat = true

  }


}
