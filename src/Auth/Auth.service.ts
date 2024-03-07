import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {UserEntity} from "../user/userEntity";

@Injectable()
export class AuthService{
    constructor(private readonly jwtSercice: JwtService)  {
    }
    generateToken(payload: UserEntity):string{
        return this.jwtSercice.sign(payload)
    }
}