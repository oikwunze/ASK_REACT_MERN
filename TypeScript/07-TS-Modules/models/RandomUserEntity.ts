import {RandomUser} from "./RandomUser";
import {Info} from "./Info";

export interface RandomUserEntity {
    results?: (RandomUser)[] | null;
    info: Info;
}