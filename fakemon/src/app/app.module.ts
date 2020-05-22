import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CombatInterfaceComponent } from './components/combat-interface/combat-interface.component';
import { SceneComponent } from './components/scene/scene.component';
import { AvatarComponent } from './components/avatar/avatar.component';

import { HttpClientModule } from '@angular/common/http';
import { SelectionMonstreComponent } from './components/selection-monstre/selection-monstre.component';
import { GameComponent } from './components/game/game.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';




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
    SceneComponent,
    AvatarComponent,
    SelectionMonstreComponent,
    GameComponent,
    DialogBoxComponent,
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
