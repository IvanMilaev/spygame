import { Component, OnInit } from "@angular/core"
import { AuthService } from "./auth/auth.service"
import { DataService } from "./services/data.service"
import { TitleService } from "./services/title.service"
@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private dataSrv: DataService,
        private titleSrv: TitleService
    ) {
        //this.authService.runInitialLoginSequence();
    }
    ngOnInit() {
        this.dataSrv.getAppConfig().subscribe(config => {
            this.titleSrv.titles = config.titles
        })
    }
    title = "spygame"
}
