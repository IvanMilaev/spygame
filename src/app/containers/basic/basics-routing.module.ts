import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MentorComponent } from './mentor/mentor.component';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from 'src/app/auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'mentor', component: MentorComponent, canActivate: [AuthGuard] },
  { path: 'public', component: PublicComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicsRoutingModule {}
