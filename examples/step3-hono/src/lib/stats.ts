import { Hono } from 'hono';

const app = new Hono();

app.post(async c => {
  const { values } = await c.req.json<{ values: number[] }>();
  const sum = values.reduce((a, b) => a + b, 0);
  const mean = sum / values.length;
  const stdDev = Math.sqrt(values.reduce((a, b) => a + (b - mean) ** 2, 0) / values.length);
  const max = Math.max(...values);
  const min = Math.min(...values);
  const count = values.length;
  return c.json({
    min,
    max,
    mean,
    stdDev,
    count,
  });
});

export const statsApp = app;
