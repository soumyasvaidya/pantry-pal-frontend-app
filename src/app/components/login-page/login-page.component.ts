import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public loginForm !: FormGroup
  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      userPasswd: ['', Validators.required],
      userrole: ['']
    })
  }
  login(){
    this.http.post<any>("http://localhost:8080/login",this.loginForm.value)
    .subscribe((data:any)=>{
      // const user = data.find((a:any)=>{
      //   return a.email === this.loginForm.value.email && a.UserPasswd === this.loginForm.value.UserPasswd 
      // });
      if(this.loginForm.value.email===data.user.email && this.loginForm.value.userPasswd=== data.user.userPasswd){
        alert('Login Succesful');
        this.loginForm.reset()
      this.router.navigate(["home"])
      }else{
        alert("user not found")
      }
    },err=>{
      alert("Something went wrong")
    })
  }

}
