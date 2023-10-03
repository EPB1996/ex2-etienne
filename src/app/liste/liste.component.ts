import { Component } from '@angular/core';
import { Movie } from '../model/model';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
})
export class ListeComponent {
  selectedMovie: Movie | null = null;
  movies: Movie[];

  constructor(movieService: MovieService) {
    this.movies = movieService.getMovies();
  }

  selectMovie(movie: Movie) {
    this.selectedMovie = movie;
  }
}
