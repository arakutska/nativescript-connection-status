import {Injectable} from '@angular/core';
import {startMonitoring} from "tns-core-modules/connectivity";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class InternetConnectionService {

    getConnectionStatus(): Observable<boolean> {

        return Observable.create(observer => {
            startMonitoring(connectionType => {
                if (connectionType == 0) {
                    observer.next(false);
                }
                else
                    observer.next(true);
            });
        })
    }
}