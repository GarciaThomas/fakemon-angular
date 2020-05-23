import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {


  login : string = "login"
  password : string = "password"
  passwordVerif : string = ""

  inscriptionBool : boolean = false

  constructor(private router : Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("connected")){
      this.router.navigateByUrl('/combat')
    }
  }

  inscriptionOuConnexion(){
    if(this.inscriptionBool){
      this.inscrire()
    }else{
      this.connecter()
    }
  }

  inscrire(){

  }

  connecter(){
    sessionStorage.setItem('connected','true')
  }

}
