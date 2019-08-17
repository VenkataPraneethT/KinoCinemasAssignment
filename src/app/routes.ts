import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

export const appRoutes = [
  {path: '', redirectTo: '/movie/list', pathMatch: 'full'},
  {path: 'movie/list', component: MoviesListComponent},
  {path: 'movies/favorites', component: FavoriteMoviesComponent},
  {path: 'movie/:id', component: MovieDetailsComponent}
];
