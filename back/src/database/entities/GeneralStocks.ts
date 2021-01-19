import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';

import GeneralStockPurchases from './GeneralStockPurchases'

@Entity('GeneralStocks')
export default class GeneralStocks{

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({type: 'character', length:100})
  name: string;

  @Column({type:'integer'})
  quantity: number;

  @OneToMany(type => GeneralStockPurchases, generalStockPurchases => generalStockPurchases.generalStocks)
  generalStockPurchases: GeneralStockPurchases[]
}