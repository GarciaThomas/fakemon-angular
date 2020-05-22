import { Component, OnInit, Input } from '@angular/core';
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
export class CombatInterfaceComponent implements OnInit {
	public arena: string;
	public playerId: number;
	@Input() public player: Player;
	@Input() public monstreJoueur: Monster;
	@Input() public monstreAdverse: Monster;
	public ratioPvAdv: string ;
	public ratioPvPlay: number;

  constructor(public servMonster?: MonsterService,
	public servPlayer?: PlayerService,
	public combatLayout?: CombatLayoutComponent) {}

	ngOnInit() {
		this.ratioPvAdvCalc();
		this.ratioPvPlayCalc();
     /* this.servMonster.reload();
		this.servPlayer.reload();
		this.servPlayer.findPlayer(1);
		this.player = this.servPlayer.player;
		this.monstreJoueur = this.player.equipePlayer[0];
		this.monstreAdverse = this.player.equipePlayer[1];*/
	}

	public listSwitch() {
	  //methode qui donne la liste des fakemon pour switch
	}

	public capture() {
	  //pour lancer la capture
	}

	public ratioPvAdvCalc() {
		let ratio = (this.monstreAdverse.pv*100)/(this.monstreAdverse.pvMax);
		this.ratioPvAdv = ratio + "%";
	}

	public ratioPvPlayCalc() {
		this.ratioPvPlay = (this.monstreJoueur.pv*100)/this.monstreJoueur.pvMax;
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
