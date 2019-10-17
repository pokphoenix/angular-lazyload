import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from '../interface/employee';
import { Observable,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmployeeService {
  
  private _url: string = "/assets/data/employees.json";
  public employeees: IEmployee[];
  
  constructor(private http : HttpClient) { }

  getEmployeees() {
    return [
      {"id":1,"name":"Andrew","age":30},
      {"id":2,"name":"Brandon","age":25},
      {"id":3,"name":"Christina","age":26},
      {"id":4,"name":"Elena","age":28}
    ];
  }
  getEmployeeesUrl() :Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }

}
