import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import Florais from '../Florais';
import Prescriptions from './prescriptions';

@Entity('Essences')
export default class Essences{

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  prescriptionId: number;

  @Column()
  floralId: number;

  @Column({type:'smallint'})
  gotas: number;

  @ManyToOne(type => Prescriptions, presciption => presciption.essences)
  prescription: Prescriptions;

  @ManyToOne(type => Florais, florais => florais.floral)
  essence: Florais;
}