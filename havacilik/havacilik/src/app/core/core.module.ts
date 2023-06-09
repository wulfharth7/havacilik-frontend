import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';import { HeaderComponent } from './header/header.component';
import { YonlendirmeButonuComponent } from '../shared/yonlendirme-butonu/yonlendirme-butonu.component';import { HomepageComponent } from './pages/homepage/homepage.component';
import { ButtonModule } from 'primeng/button';import { PictureCardsComponent } from '../shared/picture-cards/picture-cards.component';
import { BilgiSistemiComponent } from './pages/bilgi-sistemi/bilgi-sistemi.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { HttpClientModule } from '@angular/common/http';import { CalendarModule } from 'primeng/calendar';
import { LayoutModule } from '@angular/cdk/layout';import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    LayoutModule,
    DropdownModule,
    BrowserAnimationsModule,
    CalendarModule
  ],
  exports:[
    HomepageComponent
  ]
})
export class CoreModule { }
