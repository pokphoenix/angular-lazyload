import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {
  auth2;
  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
  
  constructor() { }

  ngOnInit() {
    this.googleSDK();
  }

  googleSDK() {
 
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '692755643117-d6if7ftvckvs5aj6pu7onretv517uorb.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLoginButton();
      });
    }
   
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
   
  }

  prepareLoginButton() {
 
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
   
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE
   
   
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
   
  }

}
