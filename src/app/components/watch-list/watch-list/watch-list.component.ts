import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {
  movies: Movies[] = [];
  yetToWatchMovies: Movies[] = [];
  watchedMovies: Movies[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies) => this.movies = movies);
    console.log("movies", this.movies);

  }

  ngDoCheck(): void {
    if (this.movies.length && !this.watchedMovies.length) {
      this.yetToWatchMovies = this.movies.filter((m) => !m.isFav && !m.isWatched);
      this.watchedMovies = this.movies.filter((m) => m.isWatched);
    }
  }

  onFavClick(movies: Movies): void {
  }

  onWatchedClick(movies: Movies): void {

  }

}
