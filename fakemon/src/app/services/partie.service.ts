import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';
import { HttpClient } from '@angular/common/http';
import { Monster } from '../classes/monster';

@Injectable({
  providedIn: 'root'
})
export class PartieService {
  public starterSelected = false
  public playerId : number = 1
  private urlPlayerApi : string  = ""
  constructor(private apiCfg:ApiConfigService, private http:HttpClient) {
      this.urlPlayerApi = `${apiCfg.apiUrl}/player`
   }

   getStarters(){
      return this.http.get<any>(this.urlPlayerApi+'/'+this.playerId+'/starter/pop')
   }
   selectStarters(monstre){
    return this.http.post(this.urlPlayerApi+'/'+this.playerId+'/starter/',monstre).subscribe(() => this.starterSelected = true)
  }

  getPlayer(){
    return this.http.get<any>(this.urlPlayerApi+'/'+this.playerId)
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
      obj['listAttaqueArray'],
      obj['situation'],
      obj['type']
      )
  }
}
