import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})

export class SelectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  tiles: Tile[] = [
    { text: "Test Query", cols: 3, rows: 1, color: "lightblue" },
    { text: "Manipulate Database", cols: 1, rows: 2, color: "red" },
    { text: "Show Aggregations", cols: 3, rows: 1, color: "lightgreen" }
  ]

  changeRoute(tag: string): void {
    var url = ""

    switch (tag) {
      case "Test Query":
        url = "/testquery";
        break;
      case "Show Aggregations":
        url = "/aggregations";
        break;
      case "Manipulate Database":
        url = "/dbmanipulation";
        break;
      default:
        url = "/"
        break;
    }
    this.router.navigateByUrl(url);
  }
}