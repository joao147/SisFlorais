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

  @Column({type:'character', length: 100})
  adress: string;

  @Column({type:'character', length: 2, default: 'MS'})
  uf: string;

  @Column({type:'character', length: 100, default: 'Nova Andradina'})
  city: string;

  @ManyToOne(type => People, people=> people.directContacts, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({name:'peopleId'})
  person: People;
}