import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from './app-config.service';
import { Monster } from '../classes/Monster';
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

  /*
  public monster2Player(player: Player) {
    this.http.get<Array<Monster>>(this.apiUrl)
    .subscribe( m => this.listMonster = m);
  }*/



}
