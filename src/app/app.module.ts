import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar/tool-bar.component';
import { WatchListComponent } from './components/watch-list/watch-list/watch-list.component';
import { AddMovieComponent } from './components/add-movie/add-movie/add-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    WatchListComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
