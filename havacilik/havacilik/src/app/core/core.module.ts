import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'
import { HeaderComponent } from './header/header.component';
import { YonlendirmeButonuComponent } from '../shared/yonlendirme-butonu/yonlendirme-butonu.component';
import { HomepageComponent } from './pages/homepage/homepage.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomepageComponent,
    YonlendirmeButonuComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports:[
    HomepageComponent
  ]
})
export class CoreModule { }
