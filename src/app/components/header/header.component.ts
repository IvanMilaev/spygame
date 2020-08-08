import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  EventEmitter,
  Output,
  Optional
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IHeaderMenuItem } from './IHeaderMenuItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() items: IHeaderMenuItem[];
  public hasHamburger: boolean = true;

  expanded(event) {
    console.log(event);
  }
  ngOnInit(): void {}
}
