import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardComponent } from './components/main/card/card.component';
import { ArticleComponent } from './components/article/article.component';
import { HttpClientModule} from '@angular/common/http';
import { LimitSymbolsPipe } from './shared/pipes/limitSymbols.pipe';
import {registerLocaleData} from '@angular/common';
import ruLocale from '@angular/common/locales/ru';

registerLocaleData(ruLocale, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MenuComponent,
    CardComponent,
    ArticleComponent,
    LimitSymbolsPipe,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
