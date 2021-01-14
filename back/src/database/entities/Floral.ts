import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';

import FloralPurchaseHistory from './FloralPurchaseHistory'

@Entity('Floral')
export default class Floral{

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({type: 'character', length:100})
  name: string;

  @Column({type:'integer'})
  quantity: number;

  @Column({type:'integer', default: 30})
  ml: number;

  @Column({type: 'character', length: 20})
  type: string;

  @OneToMany(type => FloralPurchaseHistory, floralPurchaseHistory => floralPurchaseHistory.floral)
  floralPurchaseHistory: FloralPurchaseHistory[]
}