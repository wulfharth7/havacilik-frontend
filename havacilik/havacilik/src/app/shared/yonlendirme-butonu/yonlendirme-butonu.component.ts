import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-yonlendirme-butonu',
  templateUrl: './yonlendirme-butonu.component.html',
  styleUrls: ['./yonlendirme-butonu.component.css']
})

export class YonlendirmeButonuComponent {
//https://stackoverflow.com/questions/41427405/navigate-to-another-page-with-a-button-in-angular-2
  @Input() buttonText: string = "Darbuotojams";

}
