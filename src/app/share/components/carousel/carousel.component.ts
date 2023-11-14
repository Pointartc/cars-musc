import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<div class="prev flex flex-justify-content-center flex-align-items-center"> < </div>', '<div class="next flex flex-justify-content-center flex-align-items-center"> > </div>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
