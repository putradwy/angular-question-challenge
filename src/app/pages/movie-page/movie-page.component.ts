import { Component, EventEmitter, Output } from "@angular/core";
import { SharedService } from "../../shared.service";

import { Movie } from "../../types";
import movieListData from "../../static/movie-list.json";

@Component({
  selector: "app-movie-page",
  templateUrl: "./movie-page.component.html",
  styleUrls: ["./movie-page.component.css"]
})
export class MoviePage {
  selectedMovie = movieListData[0];
  movieListData = movieListData;

  constructor(private sharedService: SharedService) {}

  @Output() pageTitle = new EventEmitter<String>();

  onMovieSelected(movie: Movie) {
    this.selectedMovie = movie;
    this.sharedService.nextMessage(movie.title)
  }
}
