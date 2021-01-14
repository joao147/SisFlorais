import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, CreateDateColumn } from 'typeorm';

import Floral from './Floral'

@Entity('FloralPurchaseHistory')
export default class FloralPurchaseHistory{

  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn()
  purchaseDate: Date;

  @Column({type:'decimal', precision: 10, scale: 2})
  price: number;

  @ManyToOne(type => Floral, floral => floral.floralPurchaseHistory)
  floral: Floral;
}