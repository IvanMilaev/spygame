import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  border: boolean = true;
	condensed: boolean = false;
	nowrap: boolean = false;

  selected(e) {
    console.log(e);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
