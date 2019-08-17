import {Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { MovieCategoryModel } from '../../models/movie-category.model';
import { MovieDetailsModel } from '../../models/movie-details.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class MovieService {
  private API_KEY = '4cb1eeab94f45affe2536f2c684a5c9e';
  private URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';
  private URL_MOVIE = 'https://api.themoviedb.org/3/movie';

  constructor(private http: HttpClient, private storageService: StorageService) {}

  getMoviesList(name: string, lang: string): Observable<MovieCategoryModel>  {
    return this.http.get<MovieCategoryModel>(`
        ${this.URL_SEARCH}?api_key=${this.API_KEY}&language=${lang}&query=${name}
      `)
      // .pipe(
      //   catchError(this.handleError<MovieCategoryModel>('getMovies'))
      // );
  }

  getMovieById(movieID: number, lang: string): Observable<MovieDetailsModel> {
    return this.http.get<MovieDetailsModel>(`${this.URL_MOVIE}/${movieID}?api_key=${this.API_KEY}&language=${lang}`)
    // .pipe(
    //   catchError(this.handleError<MovieDetailsModel>(`getMovie id=${movieID}`))
    // );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
