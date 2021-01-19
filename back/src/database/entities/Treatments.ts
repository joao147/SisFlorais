import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, OneToMany } from 'typeorm';
import Prescriptions from './entitiesComponents/prescriptions';

@Entity('Treatments')
export default class Treatments{

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  date: Date;

  @Column({type: 'character', length: 20})
  avaliation: string;

  @OneToMany(type => Prescriptions, prescriptions => prescriptions.treatment)
  prescriptions: Prescriptions[];
}