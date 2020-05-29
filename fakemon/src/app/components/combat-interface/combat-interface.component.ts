import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Player } from 'src/app/classes/player';
import { Monster } from 'src/app/classes/monster';
import { MonsterService } from 'src/app/services/monster.service';
import { PlayerService } from 'src/app/services/player.service';
import { CombatLayoutComponent } from '../combat-layout/combat-layout.component';

@Component({
  selector: 'combat-interface, [combat-interface]',
  templateUrl: './combat-interface.component.html',
  styleUrls: ['./combat-interface.component.css']
})
export class CombatInterfaceComponent {
	public arena: string;
	public playerId: number;
	@Input() public player: Player;
	@Input() public monstreJoueur: Monster;
	@Input() public monstreAdverse: Monster;
	public ratioPvAdv: string ;
	public ratioPvPlay: string;

	switchBool : boolean = false



	msg : string = ""

  constructor(public servMonster?: MonsterService,
	public servPlayer?: PlayerService,
	public combatLayout?: CombatLayoutComponent) {}

	ngOnChanges(changes:SimpleChange){
		console.log(this.monstreJoueur)
		this.ratioPvAdvCalc()
		if(this.combatLayout.listeMessages){
			this.msg = ""
			for(let s of this.combatLayout.listeMessages){
				this.msg += "\n"+this.combatLayout.listeMessages.shift()
			}
		}

	}

	baissePv(){
		this.monstreAdverse.pv -= 1
		let ratio = (this.monstreAdverse.pv*100)/(this.monstreAdverse.pvMax);
		this.ratioPvAdv = ratio + "%";
	}

	public switch(m) {
	  this.servMonster.save(this.monstreJoueur)
	  setTimeout(()=>{
		  this.monstreJoueur = m;
		  this.ratioPvAdvCalc()
		},150)
	}

	public capture() {
	  this.combatLayout.capturer()
	}

	public ratioPvAdvCalc() {
		let ratio = (this.monstreAdverse.pv*100)/(this.monstreAdverse.pvMax);
		this.ratioPvAdv = ratio + "%";
		this.ratioPvPlay = ((this.monstreJoueur.pv*100)/this.monstreJoueur.pvMax)+"%";
	}

	attaquer(id){

		this.combatLayout.envoyerCombat(this.monstreJoueur,this.monstreAdverse,id)
	}

}


/*
			type:'GET',
			url: 'combat/setup',
			success: function(resp){
				data = resp
				console.log("SETUP")
				console.log(data)
				adversaire = data.adversaire
				attaquant = data.attaquant
				
				pvBarPlayMon = $("#progressPlayMon")
				pvPlayMonPrg = data.attaquant.pv/data.attaquant.pvMax*100
				
				pvBarPlayMon.css("width",pvPlayMonPrg+"%")
				
				pvBarAdvMon = $("#progressAdv")
				pvBarAdvMon.css("position","relative")
				pvAdvMonPrg = data.adversaire.pv/data.adversaire.pvMax*100
				pvBarAdvMon.css("width",pvAdvMonPrg+"%")
				$("#xp").text(data.attaquant.exp+"/"+data.attaquant.expNextLevel)
				
				$("#nomAttaquant").text(attaquant.espece)
				$("#lvlAttaquant").text("lvl : "+attaquant.level)
				$("#nomAdv").text(adversaire.espece)
				$("#lvlAdv").text("lvl : "+adversaire.level)
				
				atks = attaquant.listAttaque
				console.log(atks)
				$("#menuSelectAtk").empty()
				$.each(atks,function(i,atk){
					console.log(atk)
					row = $('<div class="row"></div>')
					btnContainer = $('<div class="col-4"></div>')
					btnAtk = $('<button class="btn btn-link text-dark"></button>')
					btnAtk.attr('data-toggle','collapse')
					btnAtk.attr('data-target',atk.nom+'Col')
					btnAtk.click({id:atk.id},sendCombat)
					btnAtk.text(atk.nom)
					
					indic = $('<div class="col text-left"></div>')
					indic.text("puissance : "+atk.puissance+" ["+atk.type+"]")
					
					btnContainer.append(btnAtk)
					row.append(btnContainer)
					row.append(indic)
					$('#menuSelectAtk').append(row)
				})
        */
