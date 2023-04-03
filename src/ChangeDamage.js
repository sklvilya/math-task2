import Character from './character';

export default class ChangeDamage extends Character {
  set attack(x) {
    switch (x) {
      case '2':
        this.power = 90;
        break;
      case '3':
        this.power = 80;
        break;
      case '4':
        this.power = 70;
        break;
      case '5':
        this.power = 60;
        break;
      default:
        throw new Error('Некорректное значение!');
    }
  }

  get attack() {
    return this.power;
  }

  set stoned(power) {
    this.power -= Math.log(power) * 5;
  }

  get stoned() {
    return Math.round(this.power);
  }
}
