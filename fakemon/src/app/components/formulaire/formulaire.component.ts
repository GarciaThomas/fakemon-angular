import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Compte } from 'src/app/classes/compte';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  compte : Compte = new Compte()
  login : string = "login"
  password : string = "password"
  passwordVerif : string = ""

  errorMsg : string = ""

  inscriptionBool : boolean = false
  errorBool : boolean = false
  errorComparePassword : boolean = true


  constructor(private router : Router,private auth : AuthService) { }

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

  comparePwd(){
    this.errorComparePassword  = this.passwordVerif == this.compte.password 

    return this.errorComparePassword
  }

  inscrire(){

    if(this.errorComparePassword){
      this.auth.inscription(this.compte).subscribe(data => this.errorBool = data == null)
    }
  }

  connecter(){
    this.auth.connect(this.compte.login,this.compte.password)
    setTimeout(() => this.verif(),1000)
    
  }
  verif(){
    console.log(sessionStorage)
     let connected = sessionStorage.getItem('isConnected')
    if(connected!= null){
      if(connected){
        this.router.navigateByUrl('/index')
      }else{
        this.errorBool = true
      }
    }else{
      this.errorBool = true
    }
  }
}
