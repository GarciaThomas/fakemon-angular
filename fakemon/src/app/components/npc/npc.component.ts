import { Component, OnInit, Input } from '@angular/core';
import { SceneComponent } from '../scene/scene.component';
import { Interaction } from 'src/app/classes/interaction';

@Component({
  selector: 'npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.css']
})
export class NpcComponent implements OnInit {


  @Input() trainer : Interaction

  posTop : number 
  posBottom : number 
  posLeft : number 
  posRight : number

  positionX : number
  positionY : number

  dialogues : Array<string> = []

  showDialogue : boolean = false

  ligneDialogue : string = "hé toi !"

  deedIsDone : Boolean = false

  constructor(private scene: SceneComponent) { }

  ngOnInit(): void {
    this.posTop = this.trainer.pos[1]-1
    this.posBottom  = this.trainer.pos[1]+1
    this.posLeft = this.trainer.pos[0]-1
    this.posRight = this.trainer.pos[0] +1
    this.positionX = this.trainer.pos[0]
    this.positionY = this.trainer.pos[1]
    this.dialogues.push("on va se battre !")
    this.dialogues.push("j'aime pas ta tronche.")
  }

  ngDoCheck(){
    if(!this.trainer.alreadyDone){
      if(this.scene.avatarPosX == this.positionX && this.scene.avatarPosY == this.posTop){
        this.showDialogue = true;
        this.scene.authorizeWalk = false;
        this.trainer.alreadyDone = true
      }else if(this.scene.avatarPosX == this.positionX && this.scene.avatarPosY == this.posBottom){
        this.showDialogue = true;
        this.scene.authorizeWalk = false;
        this.trainer.alreadyDone = true
      }else if(this.scene.avatarPosX == this.posLeft && this.scene.avatarPosY == this.positionY){
        this.showDialogue = true;
        this.scene.authorizeWalk = false;    
        this.trainer.alreadyDone = true
      }else if(this.scene.avatarPosX == this.posRight && this.scene.avatarPosY == this.positionY){
        this.showDialogue = true;
        this.scene.authorizeWalk = false;
        this.trainer.alreadyDone = true
      }
    }
  }

  leftDialogues(){
    console.log("verif "+this.showDialogue)
    return this.showDialogue
  }

  nextDialogue(){
    console.log(this.dialogues.length)
    if(this.dialogues.length == 0){
      this.showDialogue = false;
      //this.scene.authorizeWalk = true;
      this.combat()
    }
    console.log(this.showDialogue)
    console.log(this.scene.authorizeWalk)
    this.ligneDialogue = this.dialogues.pop()
  }

  combat(){
    console.log("npc combat lancé")
    this.scene.gamescreen.partieSvc
      .getRandomSquad()
      .subscribe(data => {
        this.scene.gamescreen.listeMonstreAdversaire = data
        this.scene.gamescreen.combatTriggered = true
      })
  }

}
