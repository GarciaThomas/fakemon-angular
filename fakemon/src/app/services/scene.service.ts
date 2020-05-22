import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfigService } from './api-config.service';
import { Scene } from '../classes/Scene';

@Injectable({
  providedIn: 'root'
})
export class SceneService {
  private urlToSceneRest : string  = ""



  constructor(private apiCfg:ApiConfigService, private http:HttpClient) {
    this.urlToSceneRest = `${apiCfg.apiUrl}/mechanics/scene`
  }

  getSceneById(id){
    return this.http.get<Scene>(this.urlToSceneRest+'/'+id)
  }

}
