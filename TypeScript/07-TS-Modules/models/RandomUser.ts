import {Name} from "./Name";
import {Login} from "./Login";
import {DobOrRegistered} from "./DobOrRegistered";
import {Id} from "./Id";
import {Picture} from "./Picture";
import {Location} from "./Location";

export interface RandomUser {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: DobOrRegistered;
    registered: DobOrRegistered;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string;
}