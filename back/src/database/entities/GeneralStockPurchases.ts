import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, CreateDateColumn } from 'typeorm';

import GeneralStocks from './GeneralStocks'

@Entity('GeneralStockPurchases')
export default class GeneralStockPurchases{

  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn()
  purchaseDate: Date;

  @Column({type:'integer'})
  quantity: number;
  
  @Column({type:'decimal', precision: 10, scale: 2})
  cost: number;

  @ManyToOne(type => GeneralStocks, generalStocks => generalStocks.generalStockPurchases)
  generalStocks: GeneralStocks;
}