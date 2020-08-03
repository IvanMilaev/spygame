import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './auth/core/core.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { HeaderComponent } from './components/header/header.component';

import { UIShellModule, StructuredListModule } from 'carbon-components-angular';
import { TasksComponent } from './components/tasks/tasks.component';
import { ShouldLoginComponent } from './components/should-login/should-login.component';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    HeaderComponent,
    TasksComponent,
    ShouldLoginComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    UIShellModule,
    StructuredListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
