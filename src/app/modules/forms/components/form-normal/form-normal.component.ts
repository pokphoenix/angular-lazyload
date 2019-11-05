import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, filter, distinctUntilChanged, debounceTime, switchMap, tap, shareReplay } from 'rxjs/operators';
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

    const cache = new Map();

    const repositoryNameChanges$ = fromEvent(repositoryTextInput, 'input').pipe(
      // map(e=>(<HTMLInputElement>e.target).value)
      map(e=>e.target['value'])
    );

    

    const repositories$ = repositoryNameChanges$.pipe(
      filter(Boolean),
      distinctUntilChanged(),
      debounceTime(1000),
      switchMap((name:string) => {

        console.log(cache);

        if (cache.get(name)) {
          return cache.get(name);
        }
        const request$ = this.formFetch(SEARCH_URL + name).pipe(
          tap((result) => cache.set(name, request$)),
          shareReplay(1)
        );
        return request$;
      }),
      // switchMap((response) => response.json())
    );

    repositories$.subscribe((repos:Observable<Repository>) => {
      console.log(repos);
      const elements = repos ? repos['items'].reduce((acc, repo) => {
        return acc + `<div>${repo.name}</div>`;
      }, '') : '';

      repositoriesElement.innerHTML = elements;
    });
  }

  formFetch(url):Observable<Repository>{
    console.log(url)
    return this._http.get<Repository>(url);
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

interface Repository{
  total_count:number ;
  incomplete_results:boolean;
  items:itemsData[];
}

interface itemsData{
  id:number;
  node_id:String;
  name:String;
  full_name:String
}