import { Injectable } from "@angular/core";
import { User } from "src/models/users/user";
import * as users from "../data/users";

@Injectable()
export class UserRepository{

    getUsers(){
        return users;
    }

}