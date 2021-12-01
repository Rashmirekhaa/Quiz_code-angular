import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  
  
  constructor(private fb: FormBuilder, private router: Router) { 
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(){
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
    this.router.navigate(['/assessment'], { replaceUrl: true });
  }

  ngOnInit(): void {
  }

}
