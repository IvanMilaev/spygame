import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { IAppConfig } from "./IAppConfig"
import { environment } from "src/environments/environment"
@Injectable({
    providedIn: "root",
})
export class DataService {
    getAppConfig(): Observable<IAppConfig> {
        return this.http.get<IAppConfig>(environment.appConfig)
    }

    constructor(private http: HttpClient) {}
}
