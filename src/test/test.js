import Demon from '../demon';
import Magician from '../magician';

test('test demon 100', () => {
  const baal = new Demon('baal', null, 2);
  baal.attack = 100;
  baal.stoned = true;

  const result = 85;

  expect(baal.attack).toBe(result);
});

test('test demon 100 without stoned', () => {
  const baal = new Demon('baal', null, 2);
  baal.attack = 100;
  baal.stoned = false;

  const result = 90;

  expect(baal.attack).toBe(result);
});

test('test demon 200', () => {
  const baal = new Demon('baal', null, 2);
  baal.attack = 200;
  baal.stoned = true;

  const result = 175;

  expect(baal.attack).toBe(result);
});

test('test magician 100', () => {
  const potter = new Magician('potter', null, 3);
  potter.attack = 100;
  potter.stoned = true;

  const result = 72;

  expect(potter.attack).toBe(result);
});

test('test magician 100 without stoned', () => {
  const potter = new Magician('potter', null, 3);
  potter.attack = 100;
  potter.stoned = false;

  const result = 80;

  expect(potter.attack).toBe(result);
});

test('test magician 200', () => {
  const potter = new Magician('potter', null, 3);
  potter.attack = 200;
  potter.stoned = true;

  const result = 152;

  expect(potter.attack).toBe(result);
});

test('.stoned = true', () => {
  const potter = new Magician('potter', null, 3);
  potter.stoned = true;
  expect(potter.stoned).toBe(true);
});
