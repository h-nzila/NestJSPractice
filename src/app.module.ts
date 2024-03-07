import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {UserModule} from "./user/user.module";
import {AuthModule} from "./Auth/auth.module";

@Module({
  imports: [UserModule,AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
