import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fakemon';
  constructor(private router : Router){}
  logout(){
    sessionStorage.clear()
    console.log(sessionStorage)
    this.router.navigateByUrl('/login')
  }
}
