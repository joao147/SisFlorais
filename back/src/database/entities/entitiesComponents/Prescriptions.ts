import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, OneToMany } from 'typeorm';

import Treatments from '../Treatments'
import Essences from './Essences'

@Entity('Prescriptions')
export default class Prescriptions{

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({type:'character', length: 20, default: 'tradicional'})
  prescription: string;

  @Column({type:'character', length: 30})
  product: string;

  @Column({type: 'date'})
  date: Date;

  @ManyToOne(type => Treatments, treatments => treatments.prescriptions)
  treatment: Treatments;

  @OneToMany(type => Essences, essesnces => essesnces.prescription)
  essences: Essences[];
}