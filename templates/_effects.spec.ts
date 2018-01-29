import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { cold, hot } from 'jasmine-marbles';
import { empty } from 'rxjs/observable/empty';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { {{ properCase name }} } from '{{position "models"}}/{{ kebabCase name }}.model';
import { {{properCase name}}Effects } from './{{kebabCase name}}.effects';

let effects: {{properCase name}}Effects;
let store: Store<>;
let httpClient: HttpClient;
let actions$: TestActions;

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

/** Sets up the data the effect needs to grab from the store. */
function mockStore(sampleMockObservable$) {
  return jest.fn(selector => {
    switch (selector) {
      case sampleStoreSelector:
        return sampleMockObservable$;
      default:
        return hot('-#', null, new Error('requested something unexpected from Store'));
    }
  });
}

function configureTestingModule(storeSelect: any) {
  TestBed.configureTestingModule({
    providers: [
      {{properCase name}}Effects,
      {
        provide: Store,
        useValue: { select: storeSelect },
      },
      { provide: Actions, useFactory: getActions },
      { provide: HttpClient, useValue: { get: jest.fn() } },
    ],
  });

  effects = TestBed.get({{properCase name}}Effects);
  store = TestBed.get(Store);
  httpClient = TestBed.get(HttpClient);
  actions$ = TestBed.get(Actions);
}

describe('{{properCase name}}Effects', () => {
  describe('load{{ properCase name }}$', () => {
    beforeEach(() => {
      const storeSelect = mockStore(
          hot('-a', { a: [] }),
      );
      configureTestingModule(storeSelect);
    });

    it('should return a new Load{{ properCase name }}Success with the {{ lowerCase name }}', () => {
      const action = new Load{{ properCase name }}();
      actions$.stream = hot('-a', { a: action });

      const {{ camelCase name }}InServerResponse: {{ properCase name }} = {
          prop: 'prop value',
        };
      const httpResponse = cold('-a|', { a: {{ camelCase name }}InServerResponse });
      (httpClient.get as any).mockReturnValueOnce(httpResponse);

      const expectedAction = new Load{{ properCase name }}Success({{ camelCase name }}InServerResponse);
      const expected = cold('--b', { b: expectedAction });

      (expect(effects.load{{ properCase name }}$) as any).toBeObservable(expected);
      expect((httpClient.get as any).mock.calls[0][0]).toBe(
          `<url that was supposed to be hit... if any>`
      );
    });

    it('when there is a server error, should return a new Load{{ properCase name }}Fail with the error', () => {
      const action = new Load{{ properCase name }}();
      actions$.stream = hot('-a', { a: action });

      const err = new Error('error from server');
      const httpResponse = cold('-#|', {}, err);
      (httpClient.get as any).mockReturnValueOnce(httpResponse);

      const expectedAction = new Load{{ properCase name }}Fail(err);
      const expected = cold('--(a|', { a: expectedAction });

      (expect(effects.load{{ properCase name }}$) as any).toBeObservable(expected);
    });
  });
});
