import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError } from 'rxjs/operators';

import { {{ properCase name }} } from '{{position "models"}}/{{ kebabCase name }}.model';
import { LOAD_{{ constantCase name }}, Load{{ properCase name }}Success, Load{{ properCase name }}Fail } from '{{position "actions"}}/{{ kebabCase name }}.actions';

@Injectable()
export class {{ properCase name }}Effects {
  @Effect()
  load{{ properCase name }}$ = this.actions$.ofType(LOAD_{{ constantCase name }}).pipe(
    switchMap((action) => {
      // ...
      //return this.httpClient.get<{{ properCase name }}>(url, { headers });
    }),
    map({{ camelCase name }} => {
      return new Load{{ properCase name }}Success({{ camelCase name }});
    }),
    catchError(err => {
      return of(new Load{{ properCase name }}Fail(err));
    })
  );

  /* istanbul ignore next because it's not worth testing the defaults here */
  constructor(private store: Store<>, private actions$: Actions, private httpClient: HttpClient) { }
}
