import { Component } from '@angular/core';
import { CarouselItem } from './carousel';
import { CommonModule } from '@angular/common';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  carouselItems: CarouselItem[] = [];

  constructor() {
    let newCarouselItem1 = new CarouselItem("assets/images/image1.jpeg", "Imagem 1");
    let newCarouselItem2 = new CarouselItem("assets/images/image2.jpg", "Imagem 2");
    let newCarouselItem3 = new CarouselItem("assets/images/image3.jpg", "Imagem 3");
    newCarouselItem1.active = true;
    this.carouselItems.push(newCarouselItem1);
    this.carouselItems.push(newCarouselItem2);
    this.carouselItems.push(newCarouselItem3);
    this.autoSlide();
  }

  changeActiveImage(itemIndex: number) {
    this.disableAllItems();
    this.carouselItems[itemIndex].active = true;
  }

  disableAllItems() {
    this.carouselItems.forEach(item => {
      item.active = false;
    });
  }

  navigateCarouselItems(rightDirection: boolean) {
    let activeIndex: number = this.carouselItems.findIndex(item => item.active);
    
    if(activeIndex == -1) {
      throw("Unable to find active item in carousel.");
    }

    let nextActiveIndex: number;

    if(rightDirection) {
      nextActiveIndex = ++activeIndex;
      if(nextActiveIndex >= this.carouselItems.length) {
        nextActiveIndex = 0;
      }
    } else {
      nextActiveIndex = --activeIndex;
      if(nextActiveIndex < 0) {
        nextActiveIndex = (this.carouselItems.length - 1);
      }
    }

    this.changeActiveImage(nextActiveIndex);
  }

  autoSlide() {
    setTimeout(() => {
      this.navigateCarouselItems(true);
      this.autoSlide();
    }, 3000);
  }
}
