import kegListReducer from '../../reducers/keg-list-reducer';

describe ('kegListReducer', () => {
  test('Should return default state if there is no action type passed to the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });
});