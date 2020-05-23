import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Monster } from 'src/app/classes/monster';
import { Player } from 'src/app/classes/player';
import { CombatService } from 'src/app/services/combat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'combat-layout',
  templateUrl: './combat-layout.component.html',
  styleUrls: ['./combat-layout.component.css']
})
export class CombatLayoutComponent implements OnInit {


  player : Player = null
  monstreAttaquant : Monster = null
  monstreDefenseur : Monster = null

  listeMessages : Array<string> = []

  constructor(private combatSvc:CombatService, public servPlayer: PlayerService, private router : Router) { }

  ngOnInit() {
    this.servPlayer.findPlayerObservable(1).subscribe(data => this.buildPlayer(data));
  }

  buildPlayer(data){
    this.player = new Player(data['id'],data['nom'],data['equipePlayer'])
    this.monstreAttaquant = this.player.equipePlayer[0]
    this.monstreDefenseur  = this.player.equipePlayer[3]
  }

  envoyerCombat(monstreAttaque,monstreDefend,id){
    console.log("attaque")
    console.log(monstreAttaque)
      this.combatSvc.envoyerAuCharbon(monstreAttaque,monstreDefend,id).subscribe(
        data => {
          console.log(data)
          this.monstreAttaquant = data[0].m
          this.monstreDefenseur = data[1].m
          this.listeMessages = []
          this.listeMessages.push(data[0].message)
          this.listeMessages.push(data[1].message)
        })
      
  }

}
