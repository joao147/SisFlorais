import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

import Profile from '../database/entities/Profile';

export default {
  async login(request: Request, response: Response){

    var credentials = request.headers.authorization;

    if(!credentials){
      return response.sendStatus(400)
    }

    const [,hash] = credentials.split(' ');

    credentials =  Buffer.from(hash, 'base64').toString();

    const [email, password] = credentials.split(':'); 

    const profileRepository = getRepository(Profile);

    await profileRepository.findOneOrFail(email)
    .then(async (profile) => {

      await bcrypt.compare(password, profile.password)
      .then(() => {
        let token = jwt.sign(email, `${process.env.JWT_SECRET}`);
        return response.status(200).json({token: token})
      })
      .catch(() => {})
    })
    .catch(() => { return response.sendStatus(401)})


  },
  async create(request: Request, response: Response){

  }
}