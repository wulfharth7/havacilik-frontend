import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-bilgi-sistemi',
  templateUrl: './bilgi-sistemi.component.html',
  styleUrls: ['./bilgi-sistemi.component.css']
})
export class BilgiSistemiComponent {
  email: string | undefined;
  password: string | undefined;
  backendurl = "https://backend-trial.vercel.app/users/login"

  constructor(private http: HttpClient) {

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
}

  

