import classNames from '../index';

describe('classNames', () => {
  test('returns combined classNames', () => {
    expect(
      classNames('string-class', {
        'string-conditional-present': true,
        'string-conditional-non-present': false,
        camelCasePresent: true,
        camelCaseNonPresent: false,
      })
    ).toEqual('string-class string-conditional-present camelCasePresent');
  });
});
