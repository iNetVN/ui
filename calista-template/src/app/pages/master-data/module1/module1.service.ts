import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {MESSAGES} from "../../../data/mock-data";

@Injectable({
    providedIn: 'root'
})
export class Module1Service {


    constructor() {
    }

    listMessage(): Observable<Object> {
        return Observable.of({items: MESSAGES, total: MESSAGES.length});
    }
}
