import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bilgi-sistemi',
  templateUrl: './bilgi-sistemi.component.html',
  styleUrls: ['./bilgi-sistemi.component.css']
})
export class BilgiSistemiComponent {
  email: string | undefined;
  password: string | undefined;
}
