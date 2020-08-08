import { Component, OnInit, Input } from "@angular/core"
import { ITask } from "./ITask"
@Component({
    selector: "app-task",
    templateUrl: "./task.component.html",
    styleUrls: ["./task.component.scss"],
})
export class TaskComponent implements OnInit {
    @Input() items: ITask[]
    border: boolean = true
    condensed: boolean = false
    nowrap: boolean = false
    constructor() {}

    selected(e) {
        console.log(e)
    }

    ngOnInit(): void {}
}
