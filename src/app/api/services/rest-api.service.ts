import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


const apiUrl = "http://192.168.0.10/mdlv_back/public/api/";
//const apiUrl = "http://vtry-on.com/mdlv-dev/public/api/";
//const apiUrl = "http://localhost:8081/mdlv_test/public/api/";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient)
  {
    
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        'Backend returned code ' + error.status +
          ' \nbody was: ' + JSON.stringify(error.error));
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
  
  // ===========================================================================================
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  public get(endpoint: string): Observable<any> {
    console.log(">>>> "+apiUrl + endpoint);
    return this.http.get(apiUrl + endpoint, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  // ===========================================================================================
  getById(endpoint: string, id: string): Observable<any> {
    const url = apiUrl + endpoint + '${id}';
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  post(endpoint: string, data): Observable<any> {
    const url = apiUrl + endpoint;
    return this.http.post(url, data, httpOptions)
      .pipe(
      catchError(this.handleError)
      );
  }

  update(endpoint: string, id: string, data): Observable<any> {
    const url = '${apiUrl}/${endpoint}/${id}/edit';
    return this.http.put(url, data, httpOptions)
      .pipe(
      catchError(this.handleError)
      );
  }

  delete(endpoint: string, id: string): Observable<{}> {
    const url = '${apiUrl}/${endpoint}/${id}';
    return this.http.delete(url, httpOptions)
      .pipe(
      catchError(this.handleError)
      );
  }

  getApiURL()
  {
    return apiUrl;
  }
}
