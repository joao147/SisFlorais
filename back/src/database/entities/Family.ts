import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Person from './Person';

@Entity('Family')
export default class Family{

  @PrimaryGeneratedColumn('increment')
  id:number;

  @Column({type:'character', length:100})
  keyPerson: string;

  @OneToMany(type => Person, person => person.family)
  people: Person[];
}