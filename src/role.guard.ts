import {CanActivate, ExecutionContext} from "@nestjs/common";
import {Observable} from "rxjs";

export class RoleGuard implements CanActivate{
    private RolePassed: string;
    constructor( role:string) {
        this.RolePassed=role
    }
    canActivate(context: ExecutionContext): boolean {
    const ctx= context.switchToHttp()
    const req: any = ctx.getRequest<Request>();
    return this.RolePassed=== req.user.role;
    }
}