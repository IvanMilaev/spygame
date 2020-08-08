import { Injectable } from "@angular/core"

@Injectable({
    providedIn: "root",
})
export class TitleService {
    public titles: { name: string; title: string }[]
    getTitle(name: any): string {
        return this.titles.find(el => el.name === name).title
    }
    constructor() {}
}
