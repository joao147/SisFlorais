import { Router } from 'express';

import AuthController from '../controllers/AuthController'

const routes = Router();

routes.post('/sign', AuthController.create);
routes.get('/login', AuthController.login);

export default routes;