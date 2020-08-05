import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShouldLoginComponent } from './components/should-login/should-login.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { FallbackComponent } from './components/fallback/fallback.component';

const routes: Routes = [
  { path: '', redirectTo: 'basics/home', pathMatch: 'full' },
  { path: 'basics', loadChildren: () => import('./containers/basics.module').then(m => m.BasicsModule) },
  { path: 'should-login', component: ShouldLoginComponent },
  { path: '**', component: FallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
