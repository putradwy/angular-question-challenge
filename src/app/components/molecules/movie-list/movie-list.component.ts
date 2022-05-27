import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Movie } from "../../../types";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  @Input() movieListData: Array<Movie>;
  @Output() movieItemSelectedEvent = new EventEmitter<Movie>();
  selectedId: string | undefined;

  onClick(movie: Movie) {
    this.movieItemSelectedEvent.emit(movie);
    this.selectedId = movie.id;
  }

  ngOnInit(): void {
    this.selectedId = this.movieListData && this.movieListData[0].id;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
