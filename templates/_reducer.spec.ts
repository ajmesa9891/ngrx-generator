import {
  reducer,
  initialState,
  {{ properCase name }}State,
  get{{ properCase name }}Loaded,
  get{{ properCase name }}Loading,
  get{{ properCase name }},
} from '{{position "reducers"}}/{{ kebabCase name}}.reducer';
import {
  Load{{ properCase name }},
  Load{{ properCase name }}Success,
  Load{{ properCase name }}Fail,
} from '{{position "actions"}}/{{ kebabCase name }}.actions';

describe('{{properCase name}}Reducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(initialState);
    });
  });
});