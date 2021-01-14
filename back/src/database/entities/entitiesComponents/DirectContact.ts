import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Person from '../Person';

@Entity('DirectContact')
export default class DirectContact{

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({type:'character', length:100})
  name: string;

  @Column({type:'character', length:20})
  contact: string;

  @Column({type:'character', length:20, nullable: true, default: null})
  optinalContact: string;

  @ManyToOne(type => Person, person=> person.directContacts)
  @JoinColumn({name:'personID'})
  person: Person;
}