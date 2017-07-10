/**
 * Module dependencies
 */
import * as express from 'express';
import { Request, Response, NextFunction } from 'express';

import * as bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
});

app.post('/register', (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  res.send('hi');
  next();
});

app.set("port", process.env.PORT || 8081);
const server = app.listen(app.get('port'), () => {
  console.log('FootsNutz API Listening on ', server.address().port);
});
