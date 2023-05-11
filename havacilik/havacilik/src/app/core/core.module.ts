import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'
import { HeaderComponent } from './header/header.component';
import { YonlendirmeButonuComponent } from '../shared/yonlendirme-butonu/yonlendirme-butonu.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    HeaderComponent,
    HomepageComponent,
    YonlendirmeButonuComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ButtonModule
  ],
  exports:[
    HomepageComponent
  ]
})
export class CoreModule { }
