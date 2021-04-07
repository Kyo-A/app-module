import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-features',
  templateUrl: './home-features.component.html',
  styles: [
  ]
})
export class HomeFeaturesComponent implements OnInit {

  features: any;

  constructor() { }

  ngOnInit(): void {
    this.features = [
      {
        title: "TITRE1",
        description: "DESC1",
        icon: 'assets/img/calendar.png'
      },
      {
        title: "TITRE2",
        description: "DESC2",
        icon: 'assets/img/award.png'
      },
      {
        title: "TITRE3",
        description: "DESC3",
        icon: 'assets/img/diagram.png'
      },
    ]
  }


}
