import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneralFetcherService {
  baseParams = new HttpParams();
  baseHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      errorMessage = `A client-side error occurred: ${error.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  getData(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  postData(url: string, body: any): Observable<any> {
    return this.http.post<any>(url, body).pipe(catchError(this.handleError));
  }

  putData(url: string, body: any): Observable<any> {
    return this.http.put<any>(url, body).pipe(catchError(this.handleError));
  }

  deleteData(url: string): Observable<any> {
    return this.http.delete<any>(url).pipe(catchError(this.handleError));
  }
}

/*
How to use in components:

GeneralFetcherService.getData().subscribe({
  next: (data) => this.data = data,
  error: (err) => this.error = err.message
});


*/
