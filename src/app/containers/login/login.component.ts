import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  public loginForm: FormGroup;
  public email: FormControl = new FormControl();
  public password: FormControl = new FormControl();
  public get hasErrors(): boolean {
    return false;
  }

  constructor() {}
  onSubmit(data) {
    console.log(data);
  }

  registration() {
    console.log('registration');
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  ngAfterViewInit(): void {
    (document.querySelector('.bx--modal-close') as any).hidden = true;
  }
}
