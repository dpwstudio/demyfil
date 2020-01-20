import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  refImages = [
    {
      image: `assets/images/sample/clients/client5.png`
    },
    {
      image: `assets/images/sample/clients/client2.png`
    },
    {
      image: `assets/images/sample/clients/client3.png`
    },
    {
      image: `assets/images/sample/clients/client1.png`
    },
    {
      image: `assets/images/sample/clients/client4.png`
    },
    {
      image: `assets/images/sample/clients/client6.png`
    }
  ];
  refOptions = {
    items: 6,
    dots: false,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    autoHeight: true,
  };
  constructor() {}

  ngOnInit() {}
}
