import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"]
})
export class SliderComponent implements OnInit {
  myCarouselImages =  [
    {
      title: 'Transfert d\'entreprises',
      subtitle: 'sur toute la France',
      url: '/transferts',
      image: `assets/images/slide/slide_11.jpg`
    },
    {
      title: 'Déménagement de particuliers',
      subtitle: 'Paris, Ile de France et Province',
      url: '/particuliers',
      image: `assets/images/slide/slide_12.jpg`
    },
    {
      title: 'Garde Meubles',
      subtitle: 'Paris et Ile de France',
      url: '/garde-meuble',
      image: `assets/images/slide/slide_13.jpg`
    },
  ]
  myCarouselOptions = {
    items: 1,
    dots: false,
    nav: true,
    loop: true,
    autoplay: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    autoHeight: true,
    animateOut: 'slideOutRight',
    lazyLoad: true
  };

  constructor() {}

  ngOnInit() {}
}
