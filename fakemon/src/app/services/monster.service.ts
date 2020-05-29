import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from './app-config.service';
import { Monster } from '../classes/monster';
import { Player } from '../classes/player';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  private apiUrl: string;
  public listMonster: Array<Monster>;


  constructor(private appConfig: AppConfigService, private http: HttpClient) { 
    this.apiUrl = `${ this.appConfig.url }/monstre`;
  }

  public reload() {
    this.http.get<Array<Monster>>(this.apiUrl)
        .subscribe( m => this.listMonster = m);
  }

  public update(monster:Monster){
    this.http.put<Monster>(this.apiUrl,monster).subscribe()
  }

  public save(m : Monster){
    return this.http.post<Monster>(this.apiUrl,m)
  }

  /*
  public monster2Player(player: Player) {
    this.http.get<Array<Monster>>(this.apiUrl)
    .subscribe( m => this.listMonster = m);
  }*/



}
