import { Component, OnInit } from '@angular/core';
import { PartieService } from 'src/app/services/partie.service';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/classes/player';
import { Compte } from 'src/app/classes/compte';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private playSvc : PlayerService, private partieSvc : PartieService, private router : Router) { }

  characters : Array<Player>
  newCharacter : Player = new Player()
  showFormulaire : boolean = false
  compte : Compte

  ngOnInit(): void {
    if(sessionStorage.getItem('isConnected')){
      this.playSvc.findAllPlayers().subscribe(data =>{
        this.characters = data
      })
      this.partieSvc
          .getCompte(sessionStorage.getItem('id_joueur'))
          .subscribe(c => this.compte = c)
    }else{
      this.router.navigateByUrl('/login')
    }
  }

  supprimer(p){
    this.playSvc.delete(p)
    setTimeout(()=> this.reload(),150)
  }
  reload(){
    if(sessionStorage.getItem('isConnected')){
      this.playSvc.findAllPlayers().subscribe(data =>{
        this.characters = data
      })
      this.partieSvc
          .getCompte(sessionStorage.getItem('id_joueur'))
          .subscribe(c => this.compte = c)
    }
  }

  createCharacter(){
    this.playSvc.addPlayer(this.newCharacter)
        .subscribe(data =>{
          this.newCharacter = data
          setTimeout(()=>{
            this.compte.characters.push(this.newCharacter)
            console.log(this.compte)
            this.partieSvc.saveCompte(this.compte).subscribe(compte => console.log(compte))
          },1000)
      })
    this.newCharacter = new Player()
    this.showFormulaire = false
  }



}
