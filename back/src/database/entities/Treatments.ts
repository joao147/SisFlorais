import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

import Prescriptions from './entitiesComponents/Prescriptions';
import People from './People';

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

  @ManyToOne(type => People, person => person.treatments, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  @JoinColumn({name:'peopleId'})
  person: People;
}