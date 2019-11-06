import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage {

  constructor(private router: Router) {

  }

  login() {

    this.router.navigateByUrl('/home');
  }

}
