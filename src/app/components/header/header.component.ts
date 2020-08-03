import { Component, OnInit, Input, TemplateRef, EventEmitter, Output, Optional } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public hasHamburger: boolean = true;

  expanded(event) {
    console.log(event);
  }
  ngOnInit(): void {
  }

}
