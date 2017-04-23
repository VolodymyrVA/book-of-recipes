import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from "@angular/forms";
import {Observable} from "rxjs";
import {observable} from "rxjs/symbol/observable";

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registration: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registration = this.fb.group({

      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
      ])],

      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z0-9_.-]*$')
      ])],

      passwordConfirm: this.fb.group({

        password: ['', Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
          Validators.pattern('^.*(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$')
        ])],

        confirm: ['', Validators.required]

      }, {validator: this.passwordMatcher})

    })
  }

  ngOnInit() {

  }

  passwordMatcher(c: AbstractControl) {
      return c.get('password').value === c.get('confirm').value ? null : {'nomatch' :true};
  }

  onSubmit(registraitioninfo) {
    console.log(registraitioninfo)
  }

}
