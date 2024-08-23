import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

interface User {
  email: string;
  name: string;
  keycloakId: string;
  posts?: Post[];
}

interface Post {
  title: string;
  author: User;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  baseParams = new HttpParams();
  baseHeaders = new HttpHeaders();
  backendURL = 'http://localhost:3000/';
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

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.backendURL)
      .pipe(catchError(this.handleError));
  }

  getUser(id: string): Observable<User> {
    return this.http
      .get<User>(this.backendURL, { params: { id } })
      .pipe(catchError(this.handleError));
  }

  createUser(body: User): Observable<User> {
    return this.http
      .post<User>(this.backendURL, body)
      .pipe(catchError(this.handleError));
  }

  updateUser(body: Partial<User>): Observable<Partial<User>> {
    return this.http
      .put<Partial<User>>(this.backendURL, body)
      .pipe(catchError(this.handleError));
  }

  deleteUser(id: number): Observable<User> {
    return this.http
      .delete<User>(this.backendURL, { params: { id } })
      .pipe(catchError(this.handleError));
  }
}
