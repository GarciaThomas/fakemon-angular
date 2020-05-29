import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/classes/player';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'carte-joueur',
  templateUrl: './carte-joueur.component.html',
  styleUrls: ['./carte-joueur.component.css']
})
export class CarteJoueurComponent implements OnInit {

  @Input() player : Player

  constructor(private router : Router,private playerSvc : PlayerService,private index : IndexComponent) { }

  ngOnInit(): void {
    console.log(this.player.equipePlayer)
  }

  getEquipe(){
    return this.player.equipePlayer
  }


  selectedToPlay(){
    sessionStorage.setItem('id_character',this.player.id.toString())
    this.router.navigateByUrl('/game')
  }

}
