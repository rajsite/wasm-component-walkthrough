import { Hono } from 'hono';
import { showRoutes } from 'hono/dev';
import { logger } from 'hono/logger';
import { jsxApp } from './jsx';
import { statsApp } from './stats';

export const app = new Hono();

app.use(logger());

app.get('/', async c => {
  const request = await fetch('https://meowfacts.herokuapp.com/');
  const result = await request.json() as { data: string };
  const data = result.data ?? 'woops no response';
  return c.text(`Hello from Hono! Did you know ${data}\n`);
});

app.route('/jsx', jsxApp);
app.route('/stats', statsApp);

showRoutes(app, {
  verbose: true,
});
