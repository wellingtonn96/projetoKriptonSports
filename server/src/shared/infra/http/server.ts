import 'reflect-metadata';
import express, { json } from 'express';
import 'express-async-errors';

import '../typeorm/connectionDB';
import '@shared/container/intex';

import routes from './routes';

import middlewareError from '@modules/users/infra/http/middlewares/error';

const server = express();

server.use(json());
server.use(routes);
server.use(middlewareError);

server.listen(3333, () => console.log('🚀 Server started on port 3333'));
