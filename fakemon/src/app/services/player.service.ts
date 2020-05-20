import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { HttpClient } from '@angular/common/http';
import { Player } from '../classes/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl: string;
  public listPlayer: Array<Player>;
  public player: Player;

  constructor(private appConfig: AppConfigService, private http: HttpClient) { 
    this.apiUrl = `${ this.appConfig.url }/player`;
  }

  public reload() {
    this.http.get<Array<Player>>(this.apiUrl)
        .subscribe( p => this.listPlayer = p);
  }


  //  Obtenir les infos d'un player
  public findPlayer(id: number) {
    this.http.get<Player>(this.apiUrl+'/'+id)
    .subscribe( p => this.player = p);
  }
  
}
