import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture-cards',
  templateUrl: './picture-cards.component.html',
  styleUrls: ['./picture-cards.component.css']
})
export class PictureCardsComponent {
  @Input() sourceUri: string = " ";
}
