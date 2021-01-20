import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';
import Essences from './entitiesComponents/Essences';

import Purchases from './Purchases'

@Entity('Florais')
export default class Florais{

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({type: 'character', length:100})
  name: string;

  @Column({type: 'integer'})
  quantity: number;

  @Column({type: 'integer', default: 30})
  ml: number;

  @Column({type: 'character', length: 20})
  type: string;

  @OneToMany(type => Purchases, purchases => purchases.floral)
  purchases: Purchases[]

  @OneToMany(type => Essences, essences => essences.essence)
  essences: Essences[];
}