import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { YonlendirmeButonuComponent } from './yonlendirme-butonu/yonlendirme-butonu.component';
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [
    HeaderComponent,
    YonlendirmeButonuComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[
    YonlendirmeButonuComponent,
    MatButtonModule,
    HeaderComponent
  ]
})
export class SharedModule { }
