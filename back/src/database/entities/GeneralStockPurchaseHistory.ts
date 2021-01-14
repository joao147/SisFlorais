import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, CreateDateColumn } from 'typeorm';

import GeneralStock from './GeneralStock'

@Entity('GeneralStockPurchaseHistory')
export default class GeneralStockPurchaseHistory{

  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn()
  purchaseDate: Date;

  @Column({type:'integer'})
  quantity: number;
  
  @Column({type:'decimal', precision: 10, scale: 2})
  price: number;

  @ManyToOne(type => GeneralStock, generalStock => generalStock.generalStockPurchaseHistory)
  generalStock: GeneralStock;
}