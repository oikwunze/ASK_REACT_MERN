import {RandomUser} from "./models/RandomUser";
import {RandomUserService} from "./services/RandomUserService";

const users:RandomUser[]|undefined |null = RandomUserService.getAllUsers();
if(users && Array.isArray(users)){
    console.log(users[0]);
}