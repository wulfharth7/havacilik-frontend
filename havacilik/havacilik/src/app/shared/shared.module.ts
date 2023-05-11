import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YonlendirmeButonuComponent } from './yonlendirme-butonu/yonlendirme-butonu.component';
import { PictureCardsComponent } from './picture-cards/picture-cards.component';

@NgModule({
  declarations: [
    YonlendirmeButonuComponent,
    PictureCardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    YonlendirmeButonuComponent
  ]
})
export class SharedModule { }
