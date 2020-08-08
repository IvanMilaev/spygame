import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShouldLoginComponent } from './components/should-login/should-login.component';

import { FallbackComponent } from './components/fallback/fallback.component';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'basics/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'basics',
    loadChildren: () =>
      import('./containers/basic/basics.module').then(m => m.BasicsModule)
  },
  {
    path: 'agent',
    loadChildren: () =>
      import('./containers/agent/agent.module').then(m => m.AgentModule)
  },
  { path: 'should-login', component: ShouldLoginComponent },
  { path: '**', component: FallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
