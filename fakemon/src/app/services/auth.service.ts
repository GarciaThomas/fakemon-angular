import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';
import { HttpClient } from '@angular/common/http';
import { Compte } from '../classes/compte';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlApi : string  = ''

  constructor(private apiCfg : ApiConfigService, private http: HttpClient) {
    this.urlApi = `${apiCfg.apiUrl}/auth`
  }

  connect(login,password){
    this.http.post<Number>(this.urlApi,[login,password]).subscribe( isVerified =>{
      if(isVerified){
        sessionStorage.setItem('isConnected','true')
        sessionStorage.setItem('id_joueur',isVerified.toString())
      }else{
        sessionStorage.setItem('isConnected','false')
      }
    })
  }

  inscription(compte : Compte){
   return this.http.post<Compte>(this.urlApi+'/inscription',compte)
  }
}
