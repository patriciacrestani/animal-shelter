import { CommonModule } from '@angular/common';
import { HostListener, Renderer2 } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  showMenu: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth <= 600) {
      this.showMenu = false;
    } else {
      this.showMenu = true;
    }
  }
  
  openMenu() {
    this.showMenu = !this.showMenu;
  }

}
