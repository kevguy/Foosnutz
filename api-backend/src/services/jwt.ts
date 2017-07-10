import * as crypto from 'crypto';

const base64Encode: (str: string) => string = (str: string): string => {
  return new Buffer(str).toString('base64');
};

const sign: (str: string, key: string) => string = (str: string, key: string): string => {
  return crypto.createHmac('sha256', key).update(str).digest('base64');
};

export let encode: (payload: any, secret: string) => string = (payload: any, secret: string): string => {
  const algorithm = 'HS256';
  const header = {
    typ: 'JWT',
    alg: algorithm
  };

  let jwt = base64Encode(JSON.stringify(header)) + '.' + base64Encode(JSON.stringify(payload));
  jwt += '.' + sign(jwt, secret);
  return jwt;
};
