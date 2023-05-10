import { Component, ViewChild } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  
})
export class HomepageComponent {
  carousel1: boolean=true;
  carousel2: boolean=false;

  div1Function(){
    this.carousel1=true;
    this.carousel2=false
}

  div2Function(){
    this.carousel1=false;
    this.carousel2=true
  }

}
