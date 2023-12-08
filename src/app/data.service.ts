
import { Injectable } from "@angular/core"
import { User } from "./User"
import { Observable, of } from "rxjs";

@Injectable({providedIn:'root'})
export class dataService {
    

    getUsers() : Observable<User[]>{        
        return of([{id : 1 , name : "clerk"} , {id : 2 , name : "Robert"}]) ;
    }
}