import { fire } from 'hono/service-worker';
import { app } from './lib/app';

fire(app);
