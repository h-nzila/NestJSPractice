import {Injectable} from "@nestjs/common";
import {UserEntity} from "./userEntity";
import {CONSTANTS} from "../constants";


@Injectable()
export class UserService{
    public users: UserEntity[]= [
        {
            username:'Saad',
            password: 'Admin',
            email: 'saad@gmail.com',
            age: 22,
            role: CONSTANTS.ROLES.ANDROID_DEVELOPER
        },
        {
            username:'Zeeshan',
            password: 'Admin1',
            email: 'zeeshan@gmail.com',
            age: 12,
            role: CONSTANTS.ROLES.WEB_DEVELOPER
        },
    ]
    getUserByUserName(userName: string):UserEntity{
        return this.users.find((user)=>user.username===userName)

    }
}