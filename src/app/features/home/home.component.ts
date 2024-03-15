import { Component } from '@angular/core';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from '../../shared/showcase/showcase.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[CommonModule, CarouselComponent, ShowcaseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
