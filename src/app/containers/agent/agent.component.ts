import { Component, OnInit } from '@angular/core';
import { IHeaderMenuItem } from 'src/app/components/header/IHeaderMenuItem';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {
  public headerMenuItems: IHeaderMenuItem[] = [
    { name: 'tasks', title: 'Задания', route: 'agent/tasks' },
    { name: 'missions', title: 'Миссии', route: 'agent/missions' },
    { name: 'maps', title: 'Карты', route: 'agent/maps' },
    { name: 'codex', title: 'Кодекс', route: 'agent/codex' }
  ];
  constructor() {}

  ngOnInit(): void {}
}
