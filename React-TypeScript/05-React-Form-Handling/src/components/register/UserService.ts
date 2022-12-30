import {IUser} from "./IUser";

export class UserService {

    public static sendRegister(user: IUser) {
        console.log('....... sending to server ', user);
    }
}