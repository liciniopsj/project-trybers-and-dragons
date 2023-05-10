import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  constructor(
    _name: string,
    private _dexterity: number = getRandomInt(1, 10),
    private _race: Race = new Elf(_name, _dexterity),
    private _archetype: Archetype = new Mage(_name),
  ) {}

  private _maxLifePoints: number = this._race.maxLifePoints / 2;
  private _lifePoints: number = this._maxLifePoints;
  private _defense: number = getRandomInt(1, 10);
  private _strength: number = getRandomInt(1, 10);
  private _energy: Energy = {
    type_: this._archetype.energyType,
    amount: getRandomInt(1, 10),
  };

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) this._lifePoints -= damage;
    else this._lifePoints -= 1;

    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._dexterity + getRandomInt(1, 4));
    this._energy.amount -= 1;
  }
}