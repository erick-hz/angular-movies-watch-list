import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar/tool-bar.component';
import { WatchListComponent } from './components/watch-list/watch-list/watch-list.component';
import { AddMovieComponent } from './components/add-movie/add-movie/add-movie.component';
import { ButtonComponent } from './components/button/button/button.component';
import { MovieTileComponent } from './components/movie-tile/movie-tile.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    WatchListComponent,
    AddMovieComponent,
    ButtonComponent,
    MovieTileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
