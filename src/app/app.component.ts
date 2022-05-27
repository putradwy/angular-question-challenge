import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  pageTitle: string = '🎥 Movie Catalogue';

  setPageTitle(title: string) {
    this.pageTitle = title
  }

  constructor() {}
}
