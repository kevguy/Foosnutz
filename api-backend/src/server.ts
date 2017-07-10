/**
 * Module dependencies
 */
import * as express from 'express';
import { Request, Response, NextFunction } from 'express';

import * as bodyParser from "body-parser";

import * as mongoose from "mongoose";

import { default as User } from "./models/User";

import * as jwt from "./services/jwt";

const app = express();

mongoose.connect('mongodb://kev:123456@ds153752.mlab.com:53752/foosnutz');

app.use(bodyParser.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
});

app.post('/register', (req: Request, res: Response) => {
  console.log(req.body);
  const user = req.body;

  const newUser = new User({
    email: user.email,
    password: user.password
  });

  const payload = {
    iss: req.hostname, // issuer
    sub: user._id // subject
  }
  const token = jwt.encode(payload, "shhh..");

  newUser.save((err) => {
    res.status(200)
      .send({
        user: newUser.toJSON(),
        token
      });
  });
});

app.set("port", process.env.PORT || 8081);
const server = app.listen(app.get('port'), () => {
  console.log('FootsNutz API Listening on ', server.address().port);
  console.log(jwt.encode('hi', 'secret'));
});
