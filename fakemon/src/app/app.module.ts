import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CombatInterfaceComponent } from './components/combat-interface/combat-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    CombatInterfaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
