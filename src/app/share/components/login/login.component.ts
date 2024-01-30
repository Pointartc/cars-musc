import {Component, OnInit} from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(2)]),
  })

  constructor() {
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm.value, this.loginForm.invalid,
      '==>', this.loginForm.getRawValue()
    )
  }

  Register() {

  }
}
