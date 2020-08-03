import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { HeaderComponent } from './components/header/header.component';

import { UIShellModule, StructuredListModule } from 'carbon-components-angular';
import { TasksComponent } from './components/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    HeaderComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    StructuredListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
