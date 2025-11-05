import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProvider } from './app.routing';

import { App } from './app';
import { Home } from './components/home/home';
import { Cine } from './components/cine/cine';
import { Musica } from './components/musica/musica';
import { Menu } from './components/menu/menu';
import { Notfound } from './components/notfound/notfound';

@NgModule({
  declarations: [
    App,
    Home,
    Cine,
    Musica,
    Menu,
    Notfound
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
