import * as crypto from 'crypto';

const base64Encode: (str: string) => string = (str: string): string => {
  return new Buffer(str).toString('base64');
};

const base64Decode: (str: string) => string = (str: string): string => {
  return new Buffer(str, 'base64').toString();
};

const sign: (str: string, key: string) => string = (str: string, key: string): string => {
  return crypto.createHmac('sha256', key).update(str).digest('base64');
};

const verify: (raw: string, secret: string, signature: string) => boolean = (raw: string, secret: string, signature: string): boolean => {
  return signature === sign(raw, secret);
}

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

export let decode: (token: string, secret: string) => string =
  (token: string, secret: string): string => {
    let segments = token.split('.');

    // token has three parts: header, payload, and the signature
    if (segments.length !== 3) {
        throw new Error('Token structure incorrect');
    }

    const header = JSON.parse(base64Decode(segments[0]));
    const payload = JSON.parse(base64Decode(segments[1]));
    const signature = segments[2];

    console.log(header);
    console.log(payload);

    let rawSignature = segments[0] + '.' + segments[1];

    if (!verify(rawSignature, secret, signature)) {
      throw new Error('Verification failed');
    }

    return payload;
}
