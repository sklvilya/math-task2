import ChangeDamage from './ChangeDamage';

export default class Magician extends ChangeDamage {
  constructor(name, type, distance) {
    super(name, 'Magician', distance);
  }
}
