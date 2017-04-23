import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  logininfo: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.logininfo = this.fb.group({

      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z0-9_.-]*$')
      ])],

      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern('^.*(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$')
      ])]

    });
  }

  onSubmit(loginValue) {
    console.log(loginValue)
  }

}
