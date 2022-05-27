import { Component, OnInit } from "@angular/core";
import { SharedService } from "./shared.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  pageTitle: string;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.sharedMessage.subscribe(title => this.pageTitle = title)
  }
}
