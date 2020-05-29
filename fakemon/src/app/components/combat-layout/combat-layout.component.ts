import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Monster } from 'src/app/classes/monster';
import { Player } from 'src/app/classes/player';
import { CombatService } from 'src/app/services/combat.service';
import { Router } from '@angular/router';
import { GameComponent } from '../game/game.component';
import { MonsterService } from 'src/app/services/monster.service';

@Component({
  selector: 'combat-layout',
  templateUrl: './combat-layout.component.html',
  styleUrls: ['./combat-layout.component.css']
})
export class CombatLayoutComponent implements OnInit {


  player : Player = null
  @Input() monstreAttaquant : Monster = null
  @Input() monstreDefenseur : Monster = null
  @Input() listeMonstre : Array<Monster> = []

  listeMessages : Array<string> = []

  constructor(private combatSvc:CombatService, public servPlayer: PlayerService,private gameScreen:GameComponent, private router : Router, private monsterSvc : MonsterService) { }

  ngOnInit() {
    if(sessionStorage.getItem('id_character')){
      console.log("Combat c'est partit")
      this.player = this.gameScreen.player
      if(this.listeMonstre){
      if(this.listeMonstre.length > 0 && !this.monstreDefenseur){
        this.monstreDefenseur = this.listeMonstre.pop()
      }
    }
      //this.servPlayer.findPlayerObservable(Number.parseInt(sessionStorage.getItem('id_character'))).subscribe(data => this.buildPlayer(data));
    }else{
      this.router.navigateByUrl('/login')
    }
  }

  ngOnChanges(changes : SimpleChange){
    this.player = this.gameScreen.player
  }

  envoyerCombat(monstreAttaque,monstreDefend,id){
      this.combatSvc.envoyerAuCharbon(monstreAttaque,monstreDefend,id).subscribe(
        data => {
          this.listeMessages = []
          
          if(data[0].m.vit >= data[1].m.vit){
            this.listeMessages.push(data[1].message)
            setTimeout(()=> this.listeMessages.push(data[0].message),500)
            setTimeout(()=>this.monstreDefenseur = data[1].m,1000)
            setTimeout(() => {
              this.monstreAttaquant = data[0].m
            }, 1500)
          }else{
            this.listeMessages.push(data[0].message)
            setTimeout(()=> this.listeMessages.push(data[1].message),500)
            setTimeout(()=>this.monstreAttaquant = data[0].m,750)
            setTimeout(() => {this.monstreDefenseur = data[1].m}, 1500)
          }

          if(data[0].m.pv == 0 || data[1].m.pv == 0){
            
            data[0].m.pv = data[0].m.pvMax
            this.monsterSvc.update(data[0].m)
            
            
            if(this.listeMonstre && this.checkEquipe()){
              if(this.listeMonstre.length > 0){
                console.log("monstre mort, changement")
                this.monstreDefenseur = this.listeMonstre.pop()
              }
            }else{
              console.log("combat fini")
              setTimeout(() => this.servPlayer.updatePlayer(this.player),150)
              setTimeout(() => this.servPlayer.findPlayerObservable(this.player.id),350)
  
              setTimeout(()=>{
                console.log("player gamescreen")
                console.log(this.gameScreen.player)
                this.gameScreen.booleanCombat = false;
                this.gameScreen.reloadPlayer();              
              },3000)
            }
            

          }
          
        })
  }

  checkEquipe(){
    return this.player.equipePlayer.filter(m => m.pv > 0).length > 0
  }

  capturer(){
    console.log("tentative capture")
    this.combatSvc.capturable(this.monstreDefenseur).subscribe(resp =>{
      if(resp){
        this.monsterSvc.save(this.monstreDefenseur).subscribe(data => {
          this.player.equipePlayer.push(data)
          this.servPlayer.updatePlayer(this.player).subscribe()
          this.gameScreen.booleanCombat=false
        })
      }else{
        this.listeMessages.push("Tentative ratee !")
      }
    })
  }

}
