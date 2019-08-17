import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService} from '../others/services/movies/movie.service';
import { MovieDetailsModel } from '../others/models/movie-details.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  movieDetail: MovieDetailsModel;
  id: number;
  private sub: any;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
      this.movieService.getMovieById(this.id, 'en').subscribe(data => {
        this.movieDetail = data;
      });
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
