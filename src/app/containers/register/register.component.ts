import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit {
  public registerForm: FormGroup;
  public email: FormControl = new FormControl();
  public password: FormControl = new FormControl();
  public pseudonym: FormControl = new FormControl();
  public city: FormControl = new FormControl();
  public rpassword: FormControl = new FormControl();
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
    this.registerForm = new FormGroup({
      email: this.email,
      pseudonym: this.pseudonym,
      city: this.city,
      password: this.password,
      rpassword: this.rpassword
    });
  }

  ngAfterViewInit(): void {
    (document.querySelector('.bx--modal-close') as any).hidden = true;
  }
}
