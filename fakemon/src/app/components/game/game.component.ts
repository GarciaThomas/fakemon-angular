import { Component, OnInit } from '@angular/core';
import { Scene } from 'src/app/classes/Scene';
import { SceneService } from 'src/app/services/scene.service';
import { PartieService } from 'src/app/services/partie.service';
import { Router } from '@angular/router';
import { Compte } from 'src/app/classes/compte';
import { Player } from 'src/app/classes/player';
import { Monster } from 'src/app/classes/monster';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private sceneSvc : SceneService,public partieSvc : PartieService, private router : Router) { }
  
  scene : Scene
  public compte : Compte
  public player : Player

  public monstreJoueur : Monster
  public monstreAdversaire : Monster
  public listeMonstreAdversaire : Array<Monster>

  booleanCombat : boolean = false
  public combatTriggered : boolean = false

  ngOnInit(): void {
    if(!sessionStorage.getItem('isConnected')){
      this.router.navigateByUrl('/login')
    } else if(sessionStorage.getItem('id_joueur') && sessionStorage.getItem('id_character')){
      this.partieSvc.getCompte(sessionStorage.getItem("id_joueur")).subscribe(compte => this.compte = compte)
      let id_player = Number.parseInt(sessionStorage.getItem('id_character'))
      this.partieSvc.getPlayer(id_player).subscribe(character => {
        this.player = character
        this.sceneSvc.getSceneById(character['idScene']).subscribe(data => {this.setupScene(data);console.log(data)})
      })
      
    }else{
      this.router.navigateByUrl('/index')
    }
  }

  reloadPlayer(){
    let id_player = Number.parseInt(sessionStorage.getItem('id_character'))
    this.partieSvc.getPlayer(id_player).subscribe(character => {
      this.player = character
    })
  }

  setupScene(data){
    this.scene = new Scene(data['id'],data['type'],data['nowalk'],data['startpos'],data['background'],data['style'],data['triggers'])
  }

  loadScene(id){
    this.sceneSvc.getSceneById(id).subscribe(data => this.setupScene(data))
  }

}
