import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

import * as bcrypt from 'bcryptjs';

@Entity('Profile')
export default class Profile {

  @PrimaryGeneratedColumn('increment')
  id: Number;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(){
    this.password = bcrypt.hashSync(this.password, 12);
  }
}