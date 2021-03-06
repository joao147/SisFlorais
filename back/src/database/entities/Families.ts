import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import People from './People';

@Entity('Families')
export default class Families{

  @PrimaryGeneratedColumn('increment')
  id:number;

  @Column({type:'character', length:100, unique: true})
  keyPerson: string;

  @OneToMany(type => People, people => people.family)
  people: People[];
}