import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, ControlContainer, FormBuilder, Validators, AbstractControl} from '@angular/forms';


function passwordMatcher(c: AbstractControl) {

}

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  loginifo: FormGroup;

  constructor(private router: Router, public  fb: FormBuilder) {

    this.loginifo = this.fb.group({
      username: ['username', Validators.required],
      password: ['12345678', Validators.required]
    }, {validator: passwordMatcher});

  }

  ngOnInit() {
  }

}
