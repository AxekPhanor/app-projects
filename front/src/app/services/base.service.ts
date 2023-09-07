import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {
  url: string;
  constructor(protected http: HttpClient) {
    this.url = 'http://localhost:3000/';
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(this.url+'/'+id);
  }

  abstract findAll(): Observable<any>;

}
