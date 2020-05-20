import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {

  avatarPosX : number = 0
  avatarPosY : number = 0

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:keydown',['$event'])
  onKeyPress(e){
    console.log("test")
    if(e.keyCode == 38){
      // up
      this.avatarPosY -= 1
    }else if(e.keyCode == 40){
      // down
      this.avatarPosY += 1
    }else if(e.keyCode == 37){
      //left
      this.avatarPosX -=1 
    }else if(e.keyCode == 39){
      // right
      this.avatarPosX += 1
    }
  }

}
