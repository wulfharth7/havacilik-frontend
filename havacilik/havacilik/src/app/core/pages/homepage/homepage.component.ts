import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';

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
    const buttons = document.getElementsByClassName('carousel-button') as HTMLCollectionOf<HTMLElement>;
    const totalButtons = buttons.length;
    let currentIndex = 0;
  
    // Add event listener for keydown event
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        event.preventDefault(); // Prevent the default Tab behavior
      }
    });
  
    setInterval(() => {
      const activeButton = document.querySelector('.carousel-button.focus') as HTMLElement;
  
      if (activeButton) {
        activeButton.classList.remove('focus'); // Remove focus from previous button
      }
  
      setTimeout(() => {
        buttons[currentIndex].click();
        buttons[currentIndex].focus(); // Trigger focus on current button
        buttons[currentIndex].classList.add('focus'); // Add focus class to current button
      }, 3000);
  
      currentIndex = (currentIndex + 1) % totalButtons;
    }, 5000);
  }


  ngOnInit() {
    this.autoClickCarouselButton();
  }

  //https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section1   FOR SMOOTH SCROLLING
}
