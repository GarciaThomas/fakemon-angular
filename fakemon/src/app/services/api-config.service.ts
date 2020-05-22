import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  public apiUrl : string = ""
  constructor() { 
    this.apiUrl = "http://localhost:8181"
  }
}
