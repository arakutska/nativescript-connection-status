import {Component, OnDestroy, OnInit} from "@angular/core";
import {InternetConnectionService} from "~/shared/services/internet-connection.service";
import {Page} from "tns-core-modules/ui/page";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit, OnDestroy {
    connectionStatus: boolean = false;
    connection$;

    constructor(private _internetConnection: InternetConnectionService) { }

    ngOnInit(): void {
        this.connection$ = this._internetConnection.getConnectionStatus().subscribe(data => {
            this.connectionStatus = data.valueOf();
        });
    }

    ngOnDestroy(): void {
        if (this.connection$)
            this.connection$.unsubscribe();
    }

}
