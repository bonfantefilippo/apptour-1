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

@NgModule({
  declarations: [
    AppComponent,
    GraficiComponent,
    BottommenuComponent,
    TipsComponent,
    TopmenuComponent,
    ViewComponent,
    PiantinaComponent,
    MagazzinoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
