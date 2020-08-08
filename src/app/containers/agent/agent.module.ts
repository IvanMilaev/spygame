import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop/desktop.component';
import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { UIShellModule, StructuredListModule } from 'carbon-components-angular';
import { MapsComponent } from './maps/maps.component';
import { CodexComponent } from './codex/codex.component';
import { TasksComponent } from './tasks/tasks.component';
import { MissionsComponent } from './missions/missions.component';
import { TaskComponent } from 'src/app/components/task/task.component';

@NgModule({
  declarations: [
    DesktopComponent,
    AgentComponent,
    HeaderComponent,
    MapsComponent,
    CodexComponent,
    TasksComponent,
    MissionsComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule,
    UIShellModule,
    StructuredListModule
  ]
})
export class AgentModule {}
