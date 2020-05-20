import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/classes/player';
import { Monster } from 'src/app/classes/monster';
import { MonsterService } from 'src/app/services/monster.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-combat-interface',
  templateUrl: './combat-interface.component.html',
  styleUrls: ['./combat-interface.component.css']
})
export class CombatInterfaceComponent implements OnInit {
  public arena: string;
  public playerId: number;
  public player: Player;
  public monstreJoueur: Monster;

  constructor(public servMonster?: MonsterService,
    public servPlayer?: PlayerService) { }

  ngOnInit() {
      this.servMonster.reload();
      this.servPlayer.reload();
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
