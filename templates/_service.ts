// TODO: coming soon.

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class {{ properCase name }}Service {
  constructor(private httpClient: HttpClient,) { }

  get() : Observable<any> {
    return this.httpClient.get('https://api.com');
  }
}
