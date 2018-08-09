import {Component} from "@angular/core";
import {InternetConnectionService} from "~/shared/services/internet-connection.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    constructor(public internetConnection: InternetConnectionService) {
    }

}
