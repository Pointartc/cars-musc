import {Component, OnInit} from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../services/auth.service";

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

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm.value, this.loginForm.invalid,
      '==>', this.loginForm.getRawValue()
    )
    let user
    this.loginForm.value.email, this.loginForm.value.password
  }

  Register() {
    this.router.navigateByUrl('/register')
  }

  protected readonly RouterLink = RouterLink;
}
