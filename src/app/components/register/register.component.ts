import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/userService/user-service.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    private userService: UserServiceService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      cpassword: ['', [Validators.minLength(6)]]
    }, { validator: this.checkPasswords });
  }
  
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.cpassword.value;
    return pass === confirmPass ? null : { notSame: true }
  }

  register = (registerFormValue) => {
    try {
      let newUser = {
        firstName: registerFormValue.firstName,
        lastName: registerFormValue.lastName,
        email: registerFormValue.email,
        password: registerFormValue.password,
        service: 'advance'
        // console.log("new user created ", newUser);
      }
      this.userService.registerUser(newUser).subscribe(response => {
        console.log(" register successfulll", response);
      })
    } catch (error) {
      console.log(error);
    }
  }

  login() {
    this.router.navigate(['login']);
  }
}
