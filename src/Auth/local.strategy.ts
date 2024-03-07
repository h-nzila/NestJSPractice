import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from "passport-local"
import {UserService} from "../user/user.service";
import {UserEntity} from "../user/userEntity";
import {Injectable, UnauthorizedException} from "@nestjs/common";
@Injectable()
export class localStrategy extends PassportStrategy(Strategy){
    constructor(private readonly userService:UserService) {
        super();
    }
    validate(username: string, password: string):UserEntity{
        const user: UserEntity= this.userService.getUserByUserName(username)
        if(!user) throw new UnauthorizedException();
        if(user && user.password === password){
            return user
        }else throw new UnauthorizedException();
    }
}