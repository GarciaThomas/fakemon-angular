import { Component, OnInit, Input } from '@angular/core';
import { CombatLayoutComponent } from '../combat-layout/combat-layout.component';
import { Attaque } from 'src/app/classes/attaque';
import { CombatInterfaceComponent } from '../combat-interface/combat-interface.component';

@Component({
  selector: '[attaque]',
  templateUrl: './attaque.component.html',
  styleUrls: ['./attaque.component.css']
})
export class AttaqueComponent implements OnInit {

  @Input() attaque : Attaque

  showPopover = false

  constructor(public combatLayout : CombatLayoutComponent, public combatInterface:CombatInterfaceComponent) { }

  ngOnInit(): void {
    console.log("init attaque")
    console.log(this.attaque)
  }

  attaquer(){
    this.combatLayout.envoyerCombat(this.combatInterface.monstreJoueur,this.combatInterface.monstreAdverse,this.attaque.id)
  }

}
