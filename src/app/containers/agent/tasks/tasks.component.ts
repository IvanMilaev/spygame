import { Component, OnInit } from "@angular/core"
import { ITask } from "src/app/components/task/ITask"
import { TitleService } from "src/app/services/title.service"
import { EPriority } from "src/app/components/task/EPriority"
import { EStatus } from "src/app/components/task/EStatus"
import { EComplexity } from "src/app/components/task/EComplexity"
import { ETaskType } from "src/app/components/task/ETaskType"
@Component({
    selector: "app-tasks",
    templateUrl: "./tasks.component.html",
    styleUrls: ["./tasks.component.scss"],
})
export class TasksComponent implements OnInit {
    public tasks: ITask[] = [
        {
            guid: "yidfhhdf-dsjdhjsd-jhddjfjf",
            id: 2470002,
            priority: EPriority.RED,
            type: ETaskType.DISCOVER,
            description: `
              Lorem ipsum dolor sit amet,
              <mark>-----------</mark> elit. Nunc dui magna, finibus id tortor
              sed, aliquet bibendum augue. Aenean posuere sem vel euismod
              dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a
              porttitor interdum.`,
            status: EStatus.IN_PROGRESS,
            complexity: EComplexity.EXTRA,
            goal: "Найти и уничтожить",
            conditions_for_complete: ["Захватить", "Уничтожить"],
            conditions_of_fail: ["Опоздание", "Смерть перебежчика"],
            start_date: "11-12-2020 18:00",
            due_date: "13-12-2020 18:00",
            action_date: [
                ["12-12-2020 15.00", "12-12-2020 16.00"],
                ["13-12-2020 15.00", "13-12-2020 16.00"],
            ],
            agent: ["dhjddk-fd", "djddkd-gd"],
            mentor: ["kjgkgjk-gh", "jhfjf-gh"],
        },
        {
            guid: "yidfhhdf-dsjdhjsd-jhddjfjf",
            id: 2470455,
            priority: EPriority.GREEN,
            type: ETaskType.FIND_AND_TRANSFER,
            description: `
              Lorem ipsum dolor sit amet,
  						consectetur adipiscing elit. Nunc dui magna,
  						finibus id tortor sed, aliquet bibendum augue.
  						Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
  						Pellentesque vulputate nisl a porttitor interdum.`,
            status: EStatus.IN_PROGRESS,
            complexity: EComplexity.EXTRA,
            goal: "Найти и уничтожить",
            conditions_for_complete: ["Захватить", "Уничтожить"],
            conditions_of_fail: ["Опоздание", "Смерть перебежчика"],
            start_date: "11-12-2020 18:00",
            due_date: "13-12-2020 18:00",
            action_date: [
                ["12-12-2020 15.00", "12-12-2020 16.00"],
                ["13-12-2020 15.00", "13-12-2020 16.00"],
            ],
            agent: ["dhjddk-fd", "djddkd-gd"],
            mentor: ["kjgkgjk-gh", "jhfjf-gh"],
        },
    ]
    constructor(private titleSrv: TitleService) {}

    ngOnInit(): void {}
}
