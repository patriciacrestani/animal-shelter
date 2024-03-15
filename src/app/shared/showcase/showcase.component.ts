import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShowcaseItem } from './showcase';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css'
})
export class ShowcaseComponent {

  showcaseItems: ShowcaseItem[] = [];

  constructor() {
    let newShowcaseItem1 = new ShowcaseItem("assets/images/image1.jpeg", "Imagem 1", "Imagem 1");
    let newShowcaseItem2 = new ShowcaseItem("assets/images/image2.jpg", "Imagem 2", "Imagem 2");
    let newShowcaseItem3 = new ShowcaseItem("assets/images/image3.jpg", "Imagem 3", "Imagem 3");
    let newShowcaseItem4 = new ShowcaseItem("assets/images/image1.jpeg", "Imagem 4", "Imagem 4");
    let newShowcaseItem5 = new ShowcaseItem("assets/images/image2.jpg", "Imagem 5", "Imagem 5");
    let newShowcaseItem6 = new ShowcaseItem("assets/images/image3.jpg", "Imagem 6", "Imagem 6");
    this.showcaseItems.push(newShowcaseItem1);
    this.showcaseItems.push(newShowcaseItem2);
    this.showcaseItems.push(newShowcaseItem3);
    this.showcaseItems.push(newShowcaseItem4);
    this.showcaseItems.push(newShowcaseItem5);
    this.showcaseItems.push(newShowcaseItem6);
    // this.autoSlide();
  }

  autoSlide() {
    setTimeout(() => {
      // this.navigateCarouselItems(true);
      // this.autoSlide();
    }, 3000);
  }
}