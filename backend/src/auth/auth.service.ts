/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Auth } from "./interfaces/Auth";

@Injectable()
export class AuthService {
    auth: Auth[] = [
        {
            id: 1,
            name: "user",
            email: "user@email.com",
            password: "password",
        }
    ]
}
