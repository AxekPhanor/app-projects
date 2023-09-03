import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  url = 'http://localhost:3000/users';

  constructor(protected http: HttpClient) { }

  getById(id: number): Observable<any> {
    return this.http.get<any>(this.url);
  }

  findAll(): Observable<any> {
    return this.http.get<any>(this.url);
  }

}
