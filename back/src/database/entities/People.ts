import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

import Families from './Families';
import DirectContacts from './entitiesComponents/DirectContacts';
import Treatments from './Treatments';

@Entity('People')
export default class People{

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({type:'character', length:100})
  name: string;

  @Column({type:'character', length:20, unique: true})
  document: string;

  @Column({type:'character', length:20})
  contact: string;

  @Column({type:'character', length:20, nullable: true, default: null})
  optinalContact: string;

  @Column({type:'character', length:100})
  adress: string;

  @Column({type:'character', length: 2, default: 'MS'})
  uf: string;

  @Column({type:'character', length: 100, default: 'Nova Andradina'})
  city: string;

  @Column({type:'character', length:100})
  indication: string;

  @Column({type:'date'})
  birthDate: Date;

  @ManyToOne(type => Families, families => families.people, { nullable:true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({name:'familiesId'})
  family: Families;

  @OneToMany(type => DirectContacts, directContacts => directContacts.person)
  directContacts: DirectContacts[];

  @OneToMany(type => Treatments, treatments => treatments.person)
  treatments: Treatments[];
}