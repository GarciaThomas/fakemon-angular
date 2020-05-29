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
  public needAStarter: Boolean;

  constructor(private appConfig: AppConfigService, private http: HttpClient) { 
    this.apiUrl = `${ this.appConfig.url }/player`;
  }

  public reload() {
    this.http.get<Array<Player>>(this.apiUrl)
        .subscribe( p => this.listPlayer = p);

  }

  public findAllPlayers(){
    return this.http.get<Array<Player>>(this.apiUrl+"/joueur/"+sessionStorage.getItem('id_joueur'))
  }

  public delete(player : Player){
    return this.http.delete(this.apiUrl+"/joueur/"+sessionStorage.getItem("id_joueur")+"/"+player.id).subscribe()
  }

  //  Obtenir les infos d'un player
  public findPlayer(id: number) {
    this.http.get<Player>(this.apiUrl+'/'+id)
    .subscribe( p => this.player = p);
  }

  public findPlayerObservable(id: number) {
    return this.http.get<Player>(this.apiUrl+'/'+id)
  }

  public updatePlayer(p : Player){
    return this.http.put<Player>(this.apiUrl,p)
  }

  public addPlayer(p:Player){
    p.position=[]
    p.cptArene=0
    p.cptRencontre=0
    p.equipePlayer=[]
    p.idScene=1
    p.maxArene=5
    p.maxRencontre=10
    console.log(p)
    return this.http.post<Player>(this.apiUrl+'/',p)
  
  }

}
