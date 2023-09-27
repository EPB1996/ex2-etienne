import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
})
export class ListeComponent {
  public selectedMovie: any;
  public movies: any = [
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

  selectMovie(movie: any): void {
    this.selectedMovie = movie;
  }
}
