import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  cardsImagesPaths: string[] = [];
  
  cardsTitles: string[] = [
    "deep earth".toUpperCase(),
    "night arcade".toUpperCase(),
    "soccer team vr".toUpperCase(),
    "the grid".toUpperCase(),
    "from up above vr".toUpperCase(),
    "pocket borealis".toUpperCase(),
    "the curiosity".toUpperCase(),
    "make it fisheye".toUpperCase()
  ];

  constructor() {
    for (let i = 0; i < 8; i++) {
      this.cardsImagesPaths.push(`../../../assets/images/desktop/desktop-img-${i + 1}.jpg`);
    }
  }

  
}
