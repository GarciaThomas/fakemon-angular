import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';
import { HttpClient } from '@angular/common/http';
import { Monster } from '../classes/monster';
import { action } from '../classes/action';

@Injectable({
  providedIn: 'root'
})
export class CombatService {

  urlApi : string =""

  constructor(private apiCfg:ApiConfigService, private http:HttpClient) {
    this.urlApi = `${apiCfg.apiUrl}/combat`
  }

  envoyerAuCharbon(attaquant:Monster,defenseur:Monster,idAtk :number){
    return this.http.post<Array<action>>(this.urlApi+'/attaque/'+idAtk,[attaquant,defenseur])
  }

  capturable(m : Monster){
    return this.http.post(this.urlApi+'/capture',m)
  }

}
