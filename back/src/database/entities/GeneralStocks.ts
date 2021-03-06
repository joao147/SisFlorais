import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';

import Purchases from './Purchases'

@Entity('GeneralStocks')
export default class GeneralStocks{

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({type: 'character', length:100})
  name: string;

  @Column({type:'integer'})
  quantity: number;

  @OneToMany(type => Purchases, purchases => purchases.generalStocks)
  purchases: Purchases[];
}