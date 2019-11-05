import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-normal',
  templateUrl: './form-normal.component.html',
  styleUrls: ['./form-normal.component.css']
})
export class FormNormalComponent implements OnInit {

  //mForm:any={};
  mForm: UserModel = new UserModel();

  debug:any ="";

  constructor(private _http:HttpClient) { }

  ngOnInit() {
    const repositoryTextInput = document.querySelector('#firstName');
    const repositoriesElement = document.querySelector('#repositories');

    const SEARCH_URL = 'https://api.github.com/search/repositories?q=';

    const repositoryNameChanges$ = fromEvent(repositoryTextInput, 'input').pipe(
      // map(e=>(<HTMLInputElement>e.target).value)
      map(e=>e.target['value'])
    );

    

    const repositories$ = repositoryNameChanges$.pipe(
      filter(Boolean),
      distinctUntilChanged(),
      debounceTime(1000),
      switchMap((name) => this.formFetch(SEARCH_URL + name)),
      // switchMap((response) => response.json())
    );

    repositories$.subscribe((repos) => {
      //  console.log(repos);
    const elements = repos ? repos.items.reduce((acc, repo) => {
        return acc + `<div>${repo.name}</div>`;
      }, '') : '';

      repositoriesElement.innerHTML = elements;
    });
  }

  formFetch(url){
    console.log(url)
    return this._http.get<any>(url);
  }

  onSubmit(formData){
    //  window.alert(JSON.stringify(formData));
     this.debug = JSON.stringify(formData)
  }

}

class UserModel{
  firstName :String;
  lastName :String;
  email :String;
  password:String;
}