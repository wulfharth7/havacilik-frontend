import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';import { HeaderComponent } from './header/header.component';
import { YonlendirmeButonuComponent } from '../shared/yonlendirme-butonu/yonlendirme-butonu.component';import { HomepageComponent } from './pages/homepage/homepage.component';
import { ButtonModule } from 'primeng/button';import { PictureCardsComponent } from '../shared/picture-cards/picture-cards.component';
import { BilgiSistemiComponent } from './pages/bilgi-sistemi/bilgi-sistemi.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    HeaderComponent,
    HomepageComponent,
    YonlendirmeButonuComponent,
    PictureCardsComponent,
    BilgiSistemiComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ButtonModule,
    InputTextModule,
    FormsModule,PasswordModule,
    HttpClientModule,
    LayoutModule
  ],
  exports:[
    HomepageComponent
  ]
})
export class CoreModule { }
