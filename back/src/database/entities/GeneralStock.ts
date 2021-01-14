import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';

import GeneralStockPurchaseHistory from './GeneralStockPurchaseHistory'

@Entity('GeneralStock')
export default class GeneralStock{

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({type: 'character', length:100})
  name: string;

  @Column({type:'integer'})
  quantity: number;

  @OneToMany(type => GeneralStockPurchaseHistory, generalStockPurchaseHistory => generalStockPurchaseHistory.generalStock)
  generalStockPurchaseHistory: GeneralStockPurchaseHistory[]
}