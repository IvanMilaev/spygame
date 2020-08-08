import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"

import { AppRoutingModule } from "./app-routing.module"
import { AuthModule } from "./auth/auth.module"
import { AppComponent } from "./app.component"

import { ShouldLoginComponent } from "./components/should-login/should-login.component"

import { FallbackComponent } from "./components/fallback/fallback.component"
import {
    InputModule,
    ModalModule,
    PlaceholderModule,
    ButtonModule,
    UIShellModule,
} from "carbon-components-angular"
import { LoginComponent } from "./containers/login/login.component"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RegisterComponent } from "./containers/register/register.component"
import { HttpClientModule } from "@angular/common/http"

@NgModule({
    declarations: [
        AppComponent,
        ShouldLoginComponent,
        FallbackComponent,
        LoginComponent,
        RegisterComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AuthModule.forRoot(),
        AppRoutingModule,
        UIShellModule,
        FormsModule,
        ReactiveFormsModule,
        InputModule,
        ModalModule,
        PlaceholderModule,
        ButtonModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
