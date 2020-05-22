import { Component, OnInit } from '@angular/core';
import { Scene } from 'src/app/classes/Scene';
import { SceneService } from 'src/app/services/scene.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private sceneSvc : SceneService) { }
  
  scene :Scene

  ngOnInit(): void {
    this.sceneSvc.getSceneById(1).subscribe(data => this.setupScene(data))
  }

  setupScene(data){
    this.scene = new Scene(data['id'],data['nowalk'],data['startpos'],data['background'],data['style'],data['triggers'])
  }

  loadScene(id){
    this.sceneSvc.getSceneById(id).subscribe(data => this.setupScene(data))
  }

}
