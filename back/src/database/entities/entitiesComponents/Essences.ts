import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import Florais from '../Florais';
import Prescriptions from './Prescriptions';

@Entity('Essences')
export default class Essences{

  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column()
  prescriptionId!: number;

  @Column()
  floralId!: number;

  @Column({type:'smallint'})
  gotas!: number;

  @ManyToOne(type => Prescriptions, presciption => presciption.essences, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  prescription!: Prescriptions;

  @ManyToOne(type => Florais, florais => florais.essences, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  essence!: Florais;
}