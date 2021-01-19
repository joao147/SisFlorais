import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import People from '../People';

@Entity('DirectContacts')
export default class DirectContacts{

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({type:'character', length:100})
  name: string;

  @Column({type:'character', length:20})
  contact: string;

  @Column({type:'character', length:20, nullable: true, default: null})
  optinalContact: string;

  @ManyToOne(type => People, people=> people.directContacts)
  @JoinColumn({name:'peopleID'})
  person: People;
}