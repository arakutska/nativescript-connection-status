import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import * as connectivityModule from "tns-core-modules/connectivity";

@Injectable()
export class InternetConnectionService {

    private connectionSubject = new BehaviorSubject<Boolean>(false);

    constructor() {
        setInterval(() => {
            this.getConnectionStatus();
        }, 100);
    }

    getConnectionStatus() {

        const connectionType = connectivityModule.getConnectionType();
        switch (connectionType) {
            case connectivityModule.connectionType.none:
                // Denotes no Internet connection.
                this.updateConnectionSubject(false);
                break;
            case connectivityModule.connectionType.wifi:
                // Denotes a WiFi connection.
                this.updateConnectionSubject(true);
                break;
            case connectivityModule.connectionType.mobile:
                // Denotes a mobile connection, i.e. cellular network or WAN.
                this.updateConnectionSubject(true);
                break;
            default:
                break;
        }

        return this.connectionSubject.asObservable();
    }

    private updateConnectionSubject(connection: boolean) {
        this.connectionSubject.next(connection);
    }

}