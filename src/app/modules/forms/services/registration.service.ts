import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  _url = 'http://localhost:3000/enroll';
  constructor(private _http:HttpClient) { }

  registor(userData){
    return this._http.post<any>(this._url,userData);
  }

  logout(){
    // Remove the token from the localStorage.  
    localStorage.removeItem('token');  
  }
  
  isLoggedIn() {   
  
    // create an instance of JwtHelper class.  
    //  
  
    // get the token from the localStorage as we have to work on this token.  
    let token = localStorage.getItem('token');  
  
    // check whether if token have something or it is null.  
    if(!token)  
    {  
      return false;  
    }  
  
    // get the Expiration date of the token by calling getTokenExpirationDate(String) method of JwtHelper class. this method accepts a string value which is nothing but a token.  
  
    if(token)  
    {  
      // let expirationDate = jwtHelper.getTokenExpirationDate(token);  
  
      // // check whether the token is expired or not by calling isTokenExpired() method of JwtHelper class.  
  
      // let isExpired = jwtHelper.isTokenExpired(token);  
  
      // return !isExpired;      
    }     
  }  
    

}
