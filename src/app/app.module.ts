import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraficiComponent } from './grafici/grafici.component';
import { BottommenuComponent } from './bottommenu/bottommenu.component';
import { TipsComponent } from './tips/tips.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { ViewComponent } from './view/view.component';
import { PiantinaComponent } from './piantina/piantina.component';
import { MagazzinoComponent } from './magazzino/magazzino.component';
import { PreparazioneComponent } from './preparazione/preparazione.component';
import { LavorazioneComponent } from './lavorazione/lavorazione.component';
import { FinituraComponent } from './finitura/finitura.component';
import { StorageService } from './storage.service';

@NgModule({
  declarations: [
    AppComponent,
    GraficiComponent,
    BottommenuComponent,
    TipsComponent,
    TopmenuComponent,
    ViewComponent,
    PiantinaComponent,
    MagazzinoComponent,
    PreparazioneComponent,
    LavorazioneComponent,
    FinituraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
