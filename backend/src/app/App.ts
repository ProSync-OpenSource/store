import express, { Express } from 'express';
import cors from 'cors';
import ROUTER from '../Router.ts';

const APP: Express = express();

APP.use(express.json());
APP.use(cors);
APP.use(ROUTER);

export default APP;