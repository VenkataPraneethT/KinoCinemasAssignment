import { Component, OnInit } from '@angular/core';
import { StorageService } from '../others/services/storage/storage.service';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent implements OnInit {
  favoriteMovies = [];
  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.favoriteMovies = JSON.parse(this.storageService.read('favorites'));
  }

}
