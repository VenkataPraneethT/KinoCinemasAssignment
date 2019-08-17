import { MovieModel } from './../others/models/movie.model';
import { StorageService } from './../others/services/storage/storage.service';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../others/services/movies/movie.service';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  searchText = 'all';
  movies: MovieModel[];
  favoriteClicked = {};
  favoriteMovies = [];
  constructor(private movieService: MovieService, private storageService: StorageService) {}

  ngOnInit() {
    this.getMovies();
    this.favoriteMovies = JSON.parse(this.storageService.read('favorites')) || [];
    if (this.favoriteMovies && this.favoriteMovies.length > 0) {
      this.favoriteMovies.forEach( (movie) => {
        this.favoriteClicked[movie.id] = true;
      });
    }
  }

  getMovies() {
    this.movieService.getMoviesList(this.searchText,  'en').subscribe(data => {
      this.movies = data.results;
    });
  }

  makeFavorite(id: string, title: string, url: string) {
    this.favoriteClicked[id] = this.favoriteClicked[id] ? !this.favoriteClicked[id] : true;
    let favorites = this.favoriteMovies;
    if (this.favoriteClicked[id]) {
      const favoriteMovieDetails = {
        id,
        title,
        url
      };
      favorites.push(favoriteMovieDetails);
    } else {
      favorites = favorites.filter( (movie) =>  {
        return movie.id != id ;
      });
    }
    this.storageService.save('favorites', JSON.stringify(favorites) );
  }

}
