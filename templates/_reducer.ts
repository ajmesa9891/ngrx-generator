import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { {{ properCase name }} } from '{{position "models"}}/{{ kebabCase name }}.model';
import * as {{ camelCase name }} from '{{position "actions"}}/{{ kebabCase name }}.actions';

// Keep these 2 (and delete the other 3) exports if you are NOT creating a list. Remove this comment.
export interface {{ properCase name }}State {
  loaded: boolean;
  loading: boolean;
  {{ camelCase name }}: {{ properCase name }} | null;
}

export const initialState: {{ properCase name }}State = {
  loaded: false,
  loading: false,
  {{ camelCase name }}: null,
};

// Keep these 3 (and delete the other 2) exports if you are creating a list Remove this comment.
export interface {{ properCase name }}State extends EntityState<{{ properCase name }}> {
  loaded: boolean;
  loading: boolean;
}

export const adapter: EntityAdapter<{{ properCase name }}> = createEntityAdapter<{{ properCase name }}>({
  selectId: {{ first name }} => {{ first name }}.id,
  sortComparer: false,
});

export const initialState: {{ properCase name }}State = adapter.getInitialState({
  loaded: false,
  loading: false,
});

export function reducer(state = initialState, action: {{ camelCase name }}.{{ properCase name }}Actions): {{ properCase name }}State {
  switch (action.type) {
    case {{ camelCase name }}.LOAD_{{ constantCase name }}: {
      return {
        ...state,
        loading: true
      }
    }

    case {{ camelCase name }}.LOAD_{{ constantCase name }}_SUCCESS: {
      return {
        ...state, // keep this and delete comment if you are NOT creating a list
        {{ camelCase name }}: action.payload, // keep this and delete comment if you are NOT creating a list
        ...adapter.addMany(action.payload, state), // keep this and delete comment if you are creating a list
        loaded: true,
        loading: false,
      };
    }

     case {{ camelCase name }}.LOAD_{{ constantCase name }}_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}

export const get{{ properCase name }}Loaded = (state: {{ properCase name }}State) => state.loaded;
export const get{{ properCase name }}Loading = (state: {{ properCase name }}State) => state.loading;
export const get{{ properCase name }} = (state: {{ properCase name }}State) => state.{{ camelCase name }}; // keep this and delete comment if you are NOT creating a list
