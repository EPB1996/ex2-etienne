import { Injectable } from '@angular/core';
import { Movie } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies: Movie[] = [
    {
      title: 'Pulp Fiction',
      posterUrl: '../assets/pulp_fiction.jfif',
    },
    {
      title: 'Kill Bill: Vol. 1',
      posterUrl: '../assets/kill_bill_1.jfif',
    },
    {
      title: 'Kill Bill: Vol. 2',
      posterUrl: '../assets/kill_bill_2.jfif',
    },
    {
      title: 'Django Unchained',
      posterUrl: '../assets/django_unchained.jfif',
    },
    {
      title: 'Inglourious Basterds',
      posterUrl: '../assets/inglourious_bastards.jfif',
    },
  ];

  getMovies(): Movie[] {
    return this.movies;
  }
}
