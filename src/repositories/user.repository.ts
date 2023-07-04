import { Injectable } from "@angular/core";
import { User } from "src/models/users/user";
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

const API_URL = 'http://localhost:4300/usuarios'

@Injectable()
export class UserRepository {
    API_URL: string = 'http://localhost:4300/usuarios';


    constructor(
        private httpClient: HttpClient
    ){

    }

    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(API_URL)
        .pipe(map(values => {
            const users: User[] = [];
            for(const value of values){
                users.push(Object.assign(new User(), value))
            }
            return users;
        }))
    }

    public sendUsers(user:User):void{
        const headers = new HttpHeaders({'myHeader': 'header'})
        this.httpClient.post(
        this.API_URL, 
        user, {headers: headers})
        .subscribe((res) => {
        console.log(res);
    })}
}


