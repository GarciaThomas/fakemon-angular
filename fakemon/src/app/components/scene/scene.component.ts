import { Component, OnInit, HostListener, Input, SimpleChange } from '@angular/core';
import { SceneService } from 'src/app/services/scene.service';
import { Scene } from 'src/app/classes/Scene';
import { GameComponent } from '../game/game.component';
import { Interaction } from 'src/app/classes/interaction';

@Component({
  selector: 'scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent {

  avatarPosX : number = 0
  avatarPosY : number = 0
  authorizeWalk : boolean = true

  trainersTriggers : Array<Interaction> = []
  encountersTriggers : Array<Interaction> = []
  selectionTriggers : Array<Interaction> = []

  combatTriggered : boolean = false
  
  @Input() sceneData : Scene

  ngOnChanges(changes : SimpleChange){
    this.trainersTriggers = this.sceneData.getTriggersInteractionsTrainers()
    this.selectionTriggers = this.sceneData.getTriggersInteractionsSelect()
    this.avatarPosX = this.sceneData.startpos[0]
    this.avatarPosY = this.sceneData.startpos[1]
  }

  onInit(){
    this.trainersTriggers = this.sceneData.getTriggersInteractionsTrainers()
    this.selectionTriggers = this.sceneData.getTriggersInteractionsSelect()

  }

  constructor(private sceneSvc : SceneService, public gamescreen : GameComponent) { }

  @HostListener('document:keydown',['$event'])
  onKeyPress(e){
    if(this.authorizeWalk){
      if(e.keyCode == 38){
        // up
        let nextY = this.avatarPosY - 1
        if(this.canWalk(this.avatarPosX,nextY))
          this.avatarPosY -= 1
      }else if(e.keyCode == 40){
        // down
        let nextY = this.avatarPosY + 1
        if(this.canWalk(this.avatarPosX,nextY))
          this.avatarPosY += 1
      }else if(e.keyCode == 37){
        //left
        let nextX = this.avatarPosX - 1
        if(this.canWalk(nextX,this.avatarPosY))
          this.avatarPosX -=1 
      }else if(e.keyCode == 39){
        // right
        let nextX = this.avatarPosX + 1
        if(this.canWalk(nextX,this.avatarPosY))
          this.avatarPosX += 1
      }
      this.checkTrigger()
    }
  }
  
  canWalk(nextX,nextY){
    let canWalk = true
    if(this.sceneData.nowalk.hasOwnProperty(nextY)){
      canWalk = !this.sceneData.nowalk[nextY].includes(nextX)
    }
    if(nextX < 0 || nextX > 9 || nextY < 0 || nextY > 9)
      canWalk = false
    return canWalk
  }

  checkTrigger(){
    if(this.sceneData.triggers['scenes'].length > 0){
        this.sceneData.triggers['scenes'].forEach(scene => {
        if(scene['pos'][0] ==this.avatarPosX &&  scene['pos'][1] ==this.avatarPosY){
          this.gamescreen.loadScene(scene['id'])
        }
      });
    }
    
    if(this.sceneData.triggers['encounter'].length > 0){
      console.log(this.gamescreen.player.equipePlayer)
      this.sceneData.triggers['encounter'].forEach(rencontre => {
        if(rencontre['pos'][0] == this.avatarPosX &&  rencontre['pos'][1] == this.avatarPosY){
          this.combatTriggered  = true
          if(this.sceneData.type == "wilds"){
            this.authorizeWalk = false
            this.gamescreen.partieSvc.getRencontre().subscribe(data => {this.gamescreen.monstreAdversaire = data; console.log(data)})

          }
        }
      });      
    }
  }
  getScenesTriggers(){

    return this.sceneData.getScenes()
  }
  getPlayer(){
    return this.gamescreen.player
  }
}
