import { Action } from '@ngrx/store';

import { {{ properCase name }} } from '{{position "models"}}/{{ kebabCase name }}.model';

export const LOAD_{{ constantCase name }} = '[{{ titleCase name }}] Load';
export const LOAD_{{ constantCase name }}_SUCCESS = '[{{ titleCase name }}] Load Success';
export const LOAD_{{ constantCase name }}_FAIL = '[{{ titleCase name }}] Load Fail';

export class Load{{ properCase name }} implements Action {
  readonly type = LOAD_{{ constantCase name }};
}

export class Load{{ properCase name }}Success implements Action {
  readonly type = LOAD_{{ constantCase name }}_SUCCESS;

  constructor(public payload: {{ camelCase name }}) { }
}

export class Load{{ properCase name }}Fail implements Action {
  readonly type = LOAD_{{ constantCase name }}_FAIL;

  constructor(public payload: any) { }
}

export type {{ properCase name }}Actions =
  | Load{{ properCase name }}
  | Load{{ properCase name }}Success
  | Load{{ properCase name }}Fail;
