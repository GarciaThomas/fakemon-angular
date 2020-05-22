import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { SceneComponent } from '../scene/scene.component';
import { PartieService } from 'src/app/services/partie.service';
import { Monster } from 'src/app/classes/monster';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/classes/player';

@Component({
  selector: 'selection-monstre',
  templateUrl: './selection-monstre.component.html',
  styleUrls: ['./selection-monstre.component.css']
})
export class SelectionMonstreComponent implements OnInit {

  @Input() positionX : number =  0
  @Input() positionY : number = 0
  @Input() interaction : Object = {}
  // set prop postion en haut (top), en bas (bottom), gauche (left) ou droite (right)
  offset?:string = "top"
  propPosition : Array<number> = []
  background : string = ""
  showDialog : boolean = false
  monster : Monster
  player : Player
  constructor(private pSvc : PartieService, private scene : SceneComponent, private playSvc : PlayerService) {
    
   }

  color :string =  "blue"

  ngOnInit(): void {
    this.pSvc.getPlayer().subscribe(data => this.player = new Player(data['id'],data['nom'],data['equipePlayer']))
    this.pSvc.getStarters().subscribe(data => this.monster = this.pSvc.buildMonstre(data))
    if(this.interaction['prop'].hasOwnProperty("offset")){
      this.offset = this.interaction['prop']['offset']
    }
    console.log(this.interaction['pos'])
    this.propPosition = JSON.parse(JSON.stringify(this.interaction['pos']))
    if(this.offset == "bottom"){
      this.propPosition[0] = 0
      this.propPosition[1] = 40
    }else if(this.offset == "left"){
      this.propPosition[0] = -40
      this.propPosition[1] = 0
    }else if(this.offset == "right"){
      this.propPosition[0] = 40
      this.propPosition[1] = 0
    }else{
      this.propPosition[0] = 0
      this.propPosition[1] = -40
    }
    console.log(this.propPosition)
    this.background = this.interaction['prop']['asset']
  }
  
  ngOnChanges(changes:SimpleChanges){
    console.log(this.positionX+" : "+this.positionY)
      if(this.interaction['pos'][0] == this.positionX && this.interaction['pos'][1] == this.positionY){
        this.showDialog=true
        this.scene.authorizeWalk = false
        if(this.isSelected){
          this.scene.authorizeWalk = true
        }
      }else{
        this.showDialog = false
      }
  }

  selection(){
    this.pSvc.selectStarters(this.monster)
  }

  refus(){
    this.showDialog=false
    this.scene.authorizeWalk = true
  }

  isSelected(){
    return this.player.equipePlayer.length > 0
  }



}
