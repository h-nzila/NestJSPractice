import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {AuthService} from "./Auth/Auth.service";
import {RoleGuard} from "./role.guard";
import {CONSTANTS} from "./constants";

@Controller('app')
export class AppController {
  constructor(private readonly authService:AuthService) {}

  @Post('/login')
  @UseGuards(AuthGuard("local") )
  login( @Request() req): string {
    return this.authService.generateToken(req.user)
  }

@Get('/js_developer')
@UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTANTS.ROLES.ANDROID_DEVELOPER))
  jsDeveloper(@Request() req): string {
    return "Private route accessed privately for JS successful"+ JSON.stringify(req.user)
}
  @Get('/web_developer')
  @UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTANTS.ROLES.WEB_DEVELOPER))
  WebDeveloper(@Request() req): string {
    return "Private route accessed privately for Web successful"+ JSON.stringify(req.user)
  }
}
