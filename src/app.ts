import express, { Application, Request, Response } from 'express';
const app: Application = express();
//const port = 3000

app.get('/', (req: Request, res: Response) => {
  const a: number = 10;

  res.send(a);
  res.send('Hello World!');
});
export default app;

// console.log(process.cwd());
