import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

signInForm: UntypedFormGroup;
showAlert: boolean = false;
  constructor(
    private _formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.signInForm = this._formBuilder.group({
      email     : ['', [Validators.required, Validators.email]],
      password  : ['', Validators.required],
      rememberMe: ['']
  });
  }
  signIn(){
    
  }

}
