import { Module } from '@nestjs/common';
import {PassportModule} from "@nestjs/passport";
import {localStrategy} from "./local.strategy";
import {UserModule} from "../user/user.module";
import {JwtModule} from "@nestjs/jwt";
import {AuthService} from "./Auth.service";
import {JwtStrategy} from "./jwt.strategy";

@Module({
    imports: [PassportModule, UserModule,
    JwtModule.register({
        secret: "key",
        signOptions:{
            expiresIn: "60s"
        }
    })
    ],
    controllers: [],
    providers: [localStrategy, JwtStrategy, AuthService],
    exports: [AuthService]
})
export class AuthModule {}
