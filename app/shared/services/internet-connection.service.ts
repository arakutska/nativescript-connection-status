import { Injectable } from '@angular/core';
import { startMonitoring, getConnectionType } from "tns-core-modules/connectivity";
import { Observable } from "rxjs/internal/Observable";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable()
export class InternetConnectionService {

    private _connectionStatusSubject$: BehaviorSubject<boolean>;

    constructor() {
        this._connectionStatusSubject$ = new BehaviorSubject<boolean>(getConnectionType() != 0);
        startMonitoring(connectionType => {
            if (connectionType == 0) {
                this._connectionStatusSubject$.next(false);
            }
            else
                this._connectionStatusSubject$.next(true);
        });
    }

    get connectionStatus$(): Observable<boolean> {
        return this._connectionStatusSubject$.asObservable();
    }
}