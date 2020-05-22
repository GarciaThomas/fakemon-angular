import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SceneComponent } from './components/scene/scene.component';
import { AvatarComponent } from './components/avatar/avatar.component';

import { HttpClientModule } from '@angular/common/http';
import { SelectionMonstreComponent } from './components/selection-monstre/selection-monstre.component';
import { GameComponent } from './components/game/game.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';




@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
    AvatarComponent,
    SelectionMonstreComponent,
    GameComponent,
    DialogBoxComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
