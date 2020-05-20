import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CombatInterfaceComponent } from './components/combat-interface/combat-interface.component';

const routes: Routes = [
  { path: 'combat', component: CombatInterfaceComponent },
  { path: 'lien1', component: CombatInterfaceComponent },
  { path: 'lien2', component: CombatInterfaceComponent },
  { path: '', redirectTo: 'combat', pathMatch: 'full' },
  { path: '**', component: CombatInterfaceComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CombatInterfaceComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
