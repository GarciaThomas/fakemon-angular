import { Component, OnInit, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { SceneComponent } from '../scene/scene.component';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input() x : number = 0
  @Input() y : number = 0
  @Input() name : string = "thomas"

  image = "assets/img/avatar.png"

  relativePosX : number = 0
  relativePosY : number = 0

  transformFactor : number = 40

  constructor(private scene : SceneComponent) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges){
    this.relativePosX = this.scene.avatarPosX * this.transformFactor
    this.relativePosY = this.scene.avatarPosY * this.transformFactor
    this.name = this.scene.gamescreen.compte.login
  }

}
