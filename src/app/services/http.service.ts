import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Config } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private config: Config
  ) {}

  public getWeather(): Observable<any> {
    return this.http.post(`${this.config.backendUrl}/weather`, null, this.httpOptions);
  }
}
