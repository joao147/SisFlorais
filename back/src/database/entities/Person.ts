import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

import Family from './Family';
import DirectContact from './entitiesComponents/DirectContact';

@Entity('Person')
export default class Person{

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

  @ManyToOne(type => Family, family => family.people, { nullable:true })
  @JoinColumn({name:'familyID'})
  family: Family;

  @OneToMany(type => DirectContact, directContact => directContact.person,{ nullable:true })
  directContacts: DirectContact[];
}