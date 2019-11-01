import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from 'src/app/modules/todo/service/api.service';

@Component({
  selector: 'app-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.css']
})
export class RecaptchaComponent implements OnInit {

  // SITE_KEY  : https://www.google.com/recaptcha/admin/create

  // ref : https://w3path.com/how-to-integrate-recaptcha-in-angular-8/

  // SITE KEY  6Lc4j8AUAAAAAAiCz8Vmhy0Ow9gw7ifm75L3TpUI
  // KEY SECRET  6Lc4j8AUAAAAAApY7Dju_t-75aoC1wBiubGpeyp8


  // SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  // SECRET_KEY = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";

  SITE_KEY = "6Lc4j8AUAAAAAAiCz8Vmhy0Ow9gw7ifm75L3TpUI";
  SECRET_KEY = "6Lc4j8AUAAAAAApY7Dju_t-75aoC1wBiubGpeyp8";

  @ViewChild('recaptcha', {static: true }) recaptchaElement: ElementRef;
  constructor(private api: ApiService ) { }

  ngOnInit() {
    this.addRecaptchaScript();
  }

  renderReCaptch() {
    window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
      'sitekey' : this.SITE_KEY,
      'callback': (response) => {
          let data  =  { 
              'secret' : this.SECRET_KEY
            , 'response' : response
          } ;
          this.api.verifyCaptcha(data)
          .subscribe(res => {    
                alert("Success!");
              }, (err) => {
                console.log(err);
              }
          );
      }
    });
  }
 

  addRecaptchaScript() {
 
    window['grecaptchaCallback'] = () => {
      this.renderReCaptch();
    }
   
    (function(d, s, id, obj){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'recaptcha-jssdk', this));
   
  }

  
}
