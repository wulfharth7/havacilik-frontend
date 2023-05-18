import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './core/pages/homepage/homepage.component';
import { BilgiSistemiComponent } from './core/pages/bilgi-sistemi/bilgi-sistemi.component';

const routes: Routes = [
  {path:'anasayfa', component: HomepageComponent},
  {path:'bilgi-sistemi', component: BilgiSistemiComponent},
  {path:'',redirectTo:'anasayfa', pathMatch: 'full' } //redirects localhost:4200 to /anasayfa bcs 4200 is empty
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
