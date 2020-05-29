import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';
import { HttpClient } from '@angular/common/http';
import { Monster } from '../classes/monster';
import { Compte } from '../classes/compte';

@Injectable({
  providedIn: 'root'
})
export class PartieService {
  public starterSelected = false
  public playerId : number = 1
  private urlPlayerApi : string  = ""
  private urlCompte : string = ""
  private urlMechanics : string = ""
  private pwd : string = ""
  constructor(private apiCfg:ApiConfigService, private http:HttpClient) {
      this.urlPlayerApi = `${apiCfg.apiUrl}/player`
      this.urlCompte = `${apiCfg.apiUrl}/api/compte`
      this.urlMechanics = `${apiCfg.apiUrl}/mechanics`
   }

   getStarters(){
      return this.http.get<Monster>(this.urlPlayerApi+'/'+this.playerId+'/starter/pop')
   }
   selectStarters(monstre){
    return this.http.post(this.urlPlayerApi+'/'+sessionStorage.getItem('id_character')+'/starter/',monstre)
  }

  getPlayer(id){
    return this.http.get<any>(this.urlPlayerApi+'/'+id)
  }

  getCompte(id){
    return this.http.get<Compte>(this.urlCompte+'/'+id)
  }

  getRencontre(){
    return this.http.get<Monster>(this.urlMechanics+'/monster/random')
  }

  getRandomSquad(){
    return this.http.get<Array<Monster>>(this.urlMechanics+'/trainer')
  }

  saveCompte(c : Compte){
    console.log(c)
    return this.http.put<Compte>(this.urlCompte,c)
  }

  buildMonstre(obj){
   return new Monster(
      obj['nom'],
      obj['pv'],
      obj['pvMax'],
      obj['exp'],
      obj['expNextLvl'],
      obj['id'],
      obj['aSp'],
      obj['dSp'], 
      obj['aTk'],
      obj['def'],
      obj['vit'],
      obj['equipeJoueur'],
      obj['baseAsp'], 
      obj['baseDef'], 
      obj['baseAtk'], 
      obj['basePv'], 
      obj['baseVit'], 
      obj['espece'], 
      obj['expGain'],
      obj['ivASp'], 
      obj['ivAtk'],
      obj['ivDSp'],
      obj['ivDef'],
      obj['ivPv'],
      obj['ivVit'],
      obj['level'],
      obj['listAttaque'],
      obj['situation'],
      obj['type']
      )
  }
}
