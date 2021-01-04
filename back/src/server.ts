import express from 'express';
import cors from 'cors';

import routes from './routes/routes';

import './database/connection';
import './config/dotenv';

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen( process.env.PORT || 3333);
