import Race from './Race';

export default class Elf extends Race {
  private static instances = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints: number = 99,
  ) { super(name, dexterity); }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    this.instances += 1;
    return this.instances;
  }
}
