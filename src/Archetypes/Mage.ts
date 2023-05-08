import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  get energyType(): EnergyType {
    return this._energyType;
  }
  
  private static instances = 0;
  static createdArchetypeInstances(): number {
    this.instances += 1;
    return this.instances;
  }
}
