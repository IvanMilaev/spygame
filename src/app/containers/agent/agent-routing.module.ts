import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopComponent } from './desktop/desktop.component';
import { AgentComponent } from './agent.component';
import { MapsComponent } from './maps/maps.component';
import { CodexComponent } from './codex/codex.component';
import { TasksComponent } from './tasks/tasks.component';
import { MissionsComponent } from './missions/missions.component';

const childrenRoutes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent },
  { path: 'missions', component: MissionsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'codex', component: CodexComponent },
  { path: '**', redirectTo: 'tasks' }
];
const routes: Routes = [
  { path: '', component: AgentComponent, children: childrenRoutes }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule {}
