import { Component } from '@angular/core';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[CommonModule, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
