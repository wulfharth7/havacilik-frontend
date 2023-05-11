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

}
