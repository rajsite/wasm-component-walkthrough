import { Hono } from 'hono';
import { showRoutes } from 'hono/dev';
import { logger } from 'hono/logger';
import { proxyApp } from './proxy';
import { jsxApp } from './jsx';

export const app = new Hono();

app.use(logger());

app.get('/', async c => {
  console.log('start httpbin request');
  const request = await fetch('https://httpbin.org/json');
  const result = await request.text();
  console.log('finish httpbin request');
  return c.text(`Hello World from Hono!, result: ${result}`);
});

app.route('/jsx', jsxApp);
app.route('/proxy', proxyApp);

showRoutes(app, {
  verbose: true,
});
