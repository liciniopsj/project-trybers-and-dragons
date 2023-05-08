import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  get energyType(): EnergyType {
    return this._energyType;
  }
  
  private static instances = 0;
  static createdArchetypeInstances(): number {
    this.instances += 1;
    return this.instances;
  }
}
