import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

import Families from './Families';
import DirectContacts from './entitiesComponents/DirectContacts';

@Entity('People')
export default class People{

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({type:'character', length:100})
  name: string;

  @Column({type:'character', length:20})
  document: string;

  @Column({type:'character', length:20})
  contact: string;

  @Column({type:'character', length:20, nullable: true, default: null})
  optinalContact: string;

  @Column({type:'character', length:100})
  adress: string;

  @Column({type:'character', length:100})
  indication: string;

  @Column({type:'character', length:10})
  birthDate: string;

  @ManyToOne(type => Families, families => families.people, { nullable:true })
  @JoinColumn({name:'familyID'})
  families: Families;

  @OneToMany(type => DirectContacts, directContacts => directContacts.person,{ nullable:true })
  directContacts: DirectContacts[];
}