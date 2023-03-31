import Demon from '../demon';
import Magician from '../magician';

describe('Check class Demon', () => {
  let demon;
  beforeEach(() => {
    demon = new Demon();
  });
  test('Check stoned', () => {
    demon.stoned = '3';
    expect(demon.stoned).toBe(95);
  });
  test('Check attack', () => {
    demon.attack = '2';
    expect(demon.attack).toBe(90);
  });
});

describe('Check class Magician', () => {
  let mag;
  beforeEach(() => {
    mag = new Magician();
  });
  test('Check attack 4', () => {
    mag.attack = '4';
    expect(mag.attack).toBe(70);
  });
  test('Check wrong attack', () => {
    expect(() => { mag.attack = '10'; }).toThrowError('Некорректное значение!');
  });
});
