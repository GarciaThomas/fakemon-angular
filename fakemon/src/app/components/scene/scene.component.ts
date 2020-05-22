import { Component, OnInit, HostListener, Input } from '@angular/core';
import { SceneService } from 'src/app/services/scene.service';
import { Scene } from 'src/app/classes/Scene';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent {

  avatarPosX : number = 0
  avatarPosY : number = 0
  authorizeWalk : boolean = true

  @Input() sceneData : Scene

  constructor(private sceneSvc : SceneService, private gamescreen : GameComponent) { }

  @HostListener('document:keydown',['$event'])
  onKeyPress(e){
    if(this.authorizeWalk){
      console.log(this.sceneData)
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
  }
  getScenesTriggers(){
    return this.sceneData.getScenes()
  }
}
