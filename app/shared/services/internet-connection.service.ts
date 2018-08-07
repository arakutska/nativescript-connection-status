import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {startMonitoring} from "tns-core-modules/connectivity";

@Injectable()
export class InternetConnectionService {

    private connectionSubject = new BehaviorSubject<Boolean>(false);

    constructor() {
        startMonitoring(connectionType => {
            if (connectionType == 0) {
                this.updateConnectionSubject(false);
            }
            else
                this.updateConnectionSubject(true);
        });
    }

    getConnectionStatus() {
        return this.connectionSubject.asObservable();
    }

    private updateConnectionSubject(connection: boolean) {
        this.connectionSubject.next(connection);
    }

}