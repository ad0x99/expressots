// src/services/jsonWebToken.service.ts
import {injectable} from 'inversify';
import {sign, verify} from 'jsonwebtoken';
import { Env } from 'env';

@injectable()
export class JsonWebTokenService {
  private readonly JWT_PRIVATE_KEY = Env.Security.JWT_PRIVATE_KEY;

  encode(payload: Object): string {
    return sign(payload, this.JWT_PRIVATE_KEY, { expiresIn: "1 day" });
  }

  decode(token: string): Object {
    return verify(token, this.JWT_PRIVATE_KEY);
  }
}
