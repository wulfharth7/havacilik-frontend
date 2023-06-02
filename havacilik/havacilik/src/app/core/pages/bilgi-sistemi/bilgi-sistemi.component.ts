import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
interface gender {
  name: string;
  code: string;
}
@Component({
  selector: 'app-bilgi-sistemi',
  templateUrl: './bilgi-sistemi.component.html',
  styleUrls: ['./bilgi-sistemi.component.css']
})
export class BilgiSistemiComponent {
  email: string | undefined;
  soyisim: string |undefined;
  isim: string | undefined;
  password: string | undefined;
  passwordCheck : string | undefined;
  davet_kodu: string| undefined;
  date: Date |undefined;
  backendurl = "https://backend-trial.vercel.app/users/login"
  loginPageOpen: boolean=false;
  registerPageOpen: boolean=true;
  

  genders: gender[] = [
    {
      name: 'Erkek',code:'M'
    },
    {
      name: 'Kadın', code:'F'
    },
    {
      name: 'Diğer', code:'O'
    }
  ]
  
  selectedGender: gender | undefined;
  constructor(private http: HttpClient) {

  }

  ngOnInit(){
    this.genders 
  }

  loginToSystem() {
    const requestBody = {
      Email: this.email,
      Password: this.password
    };
  
    this.http.post(this.backendurl, requestBody).subscribe(
      response => {
        console.log(response)
      },
      error => {
        // Handle errors
      }
    );
  }

  registerToSystem(){
    
  }

  openRegisterBox(){
    this.loginPageOpen = false
    this.registerPageOpen = true
  }

  openLoginBox(){
    
  }
}

  

