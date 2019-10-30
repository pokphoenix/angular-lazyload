import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../model/Todo';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl:string = "http://localhost:3000/todo" ;
  constructor(private _http: HttpClient) { }
  getTodos (): Observable<Todo[]> {
    return this._http.get<Todo[]>(this.apiUrl)
      .pipe(
        tap(heroes => console.log('fetched todos')),
        catchError(this.handleError('getTodos', []))
      );
  }
   
  getTodo(id: number): Observable<Todo> {
    const url = `${this.apiUrl}/${id}`;
    return this._http.get<Todo>(url).pipe(
      tap(_ => console.log(`fetched todo id=${id}`)),
      catchError(this.handleError<Todo>(`getTodo id=${id}`))
    );
  }
   
  addTodo (todo): Observable<Todo> {
     
    return this._http.post<Todo>(`${this.apiUrl}`, todo).pipe(
      tap((todo: Todo) => console.log(`added todo w/ id=${todo.id}`)),
      catchError(this.handleError<Todo>('addTodo'))
    );
  }
   
  updateTodo (id, todo): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this._http.put(url, todo).pipe(
      tap(_ => console.log(`updated todo id=${id}`)),
      catchError(this.handleError<any>('updateTodo'))
    );
  }
   
  deleteTodo (id): Observable<Todo> {
    const url = `${this.apiUrl}/${id}`;
   
    return this._http.delete<Todo>(url).pipe(
      tap(_ => console.log(`deleted todo id=${id}`)),
      catchError(this.handleError<Todo>('deletetodo'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
