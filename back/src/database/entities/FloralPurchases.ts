import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, CreateDateColumn } from 'typeorm';

import Floral from './Florais'

@Entity('FloralPurchases')
export default class FloralPurchases{

  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn()
  purchaseDate: Date;

  @Column({type:'decimal', precision: 10, scale: 2})
  cost: number;

  @ManyToOne(type => Floral, floral => floral.floralPurchaseHistory)
  floral: Floral;
}