import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup-up-page',
  templateUrl: './signup-up-page.component.html',
  styleUrls: ['./signup-up-page.component.css']
})
export class SignupUpPageComponent {

  public signUpForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: [""],
      userPasswd:  [""],
    userrole:  ["STUDENT"],
    studentId:  [""],
    username:  [""]
    })
  }

  signUp(){



    this.http.post<any>("http://localhost:8080/register",this.signUpForm.value)
    .subscribe((data:any)=>{
      console.log(data.message + "data message");
      if(data.message === "Registration Successfull"){
        console.log("success");
      alert('SIGNIN SUCCESFUL');
      this.router.navigate(["login"])
      }else if(data.message === "duplicate registration")
      {
        console.log("duplicate");
      alert('Email Id already Exists ! Please login.');
      }
      this.signUpForm.reset()
    },err=>{
      alert("Something went wrong")
    })
  }

}
