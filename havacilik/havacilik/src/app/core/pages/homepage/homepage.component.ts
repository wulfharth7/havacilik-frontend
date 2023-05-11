import { Component, ViewChild } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  
})
export class HomepageComponent {
  carousel1: boolean=false;
  carousel2: boolean=true;

  carousel1Button(){
    this.carousel1=false;
    this.carousel2=true
}

  carousel2Button(){
    this.carousel1=true;
    this.carousel2=false
  }

  autoClickCarouselButton() {
    const buttons = document.getElementsByClassName('carousel-button');
    const totalButtons = buttons.length;
    let currentIndex = 0;
  
    setInterval(() => {
      const activeButton = document.querySelector('.carousel-button ');
  
      if (activeButton) {
        (activeButton as HTMLElement).blur(); // Remove focus
      }
  
      setTimeout(() => {
        (buttons[currentIndex] as HTMLElement).click();
      }, 3000);
  
      currentIndex = (currentIndex + 1) % totalButtons;
    }, 5000);
  }

  ngOnInit() {
    this.autoClickCarouselButton();
  }
}
