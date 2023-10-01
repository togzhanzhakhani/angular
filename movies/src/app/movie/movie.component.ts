import { Component } from '@angular/core';
import { Movie } from '../movie.module';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  movies: Movie[] = [
    { title: 'Эмма', genre: 'роман', rating: 10, year: 2020 },
    { title: 'Маленькие женщины', genre: 'роман', rating: 8.5, year: 2018 },
    { title: 'Царство', genre: 'история', rating: 9.5, year: 2016 }
  ];

  selectedGenre: string = 'all'; 
  selectedSort: string = 'title';

  get filteredMovies() {
    return this.movies
      .filter(movie => this.selectedGenre === 'all' || movie.genre === this.selectedGenre)
      .sort((a, b) => {
        if (this.selectedSort === 'title') {
          return a.title.localeCompare(b.title);
        } else if (this.selectedSort === 'rating') {
          return a.rating - b.rating;
        } else if (this.selectedSort === 'year') {
          return a.year - b.year;
        }
        return 0;
      });
  }
}
