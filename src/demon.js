import ChangeDamage from './ChangeDamage';

export default class Demon extends ChangeDamage {
  constructor(name, type, distance) {
    super(name, 'Demon', distance);
  }
}
