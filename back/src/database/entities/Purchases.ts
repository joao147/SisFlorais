import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, CreateDateColumn, JoinColumn } from 'typeorm';

import Florais from './Florais';
import GeneralStocks from './GeneralStocks';

@Entity('FloralPurchases')
export default class FloralPurchases{

  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn()
  purchaseDate: Date;

  @Column({type:'decimal', precision: 10, scale: 2})
  cost: number;

  @Column({type:'integer'})
  quantity: number;
  
  @ManyToOne(type => Florais, floral => floral.purchases, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  @JoinColumn({name:'floraisId'})
  floral: Florais;

  @ManyToOne(type => GeneralStocks, generalStocks => generalStocks.purchases, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  @JoinColumn({name:'generalStocksId'})
  generalStocks: GeneralStocks;
}