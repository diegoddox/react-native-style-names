import stylenames from './dist';

test('This should be equal to [1, 2]', () => {
  expect(stylenames(1, 2)).toEqual([1, 2]);
});

test('This should be equal to [1, 2, {width: 1000}]', () => {
  const style = {width: 100};
  expect(stylenames(1, 2, style)).toEqual([1, 2, style]);
});