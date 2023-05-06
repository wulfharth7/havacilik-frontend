import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YonlendirmeButonuComponent } from './yonlendirme-butonu/yonlendirme-butonu.component';

@NgModule({
  declarations: [
    YonlendirmeButonuComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    YonlendirmeButonuComponent
  ]
})
export class SharedModule { }
