import Character from './character';

export default class MathCharacter extends Character {
  constructor(name, type, distance) {
    super(name, type);
    this.stoned = false;
    this.distance = distance;
    this.attack = 10;
  }

  get stoned() {
    return this.xstoned;
  }

  set stoned(value) {
    this.xstoned = value;
  }

  set attack(value) {
    this.xattack = value;
  }

  get attack() {
    let attack = this.xattack * ((11 - this.distance) / 10);
    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }
    return (attack > 0) ? Math.round(attack) : 0;
  }
}
