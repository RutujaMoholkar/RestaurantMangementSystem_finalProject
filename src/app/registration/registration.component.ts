import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BackendSeriveService } from '../backend-serive.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']  
})


//1. html --formControlName=""
//2. write same in group also and apply formating
//3. inject dependency of formBuilder
//4. override ngOnit() --create group of all components which you have in html


export class RegistrationComponent {
  
  customers: any = [];
  registerForm! : FormGroup;//make it optional
  
  constructor(
    private serviceClass : BackendSeriveService, //serviceclass ref
    private fb: FormBuilder,
    private router: Router
    ){
      this.registerForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
  }
  
  //used to initialize component lifecycle -- invoke once a while or if you want to invoke everytime write in constructor
  //1. initialization method calling the form and grouping all components
  //reactive form --we are giving validation through coding--write code to perform some kind of thing
  //validation in html code directly -- template driven form 
  ngOnInit() {
    this.registerForm = this.fb.group({
      name: [null,Validators.required],
      contactNumber: [null, [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]],//,Validators.minLength(10), Validators.maxLength(12)
      email: [null,Validators.required],
      password: [null, Validators.required]

    });
  }
  
  //after clicking on submit button event is happen and this method will call sevices method
  postCustomer(){
    this.serviceClass
    .addCustomer(this.registerForm.value)//pass formgroupname.value--it will take all form details
    .subscribe((res) => {
      alert("Registration Sucessful");
    });
   
    }

    registerUser() {
      this.serviceClass.authenticate(this.registerForm.value).subscribe(
        (response: any) => {
          localStorage.setItem('token', response); // Store JWT token in local storage
          this.router.navigate(['/profile']); // Redirect to profile page
          alert("Registration Sucessful");
        },
        (error) => {
          console.error('Error registering user:', error);
          // Handle error, e.g., display error message to the user
        }
      );
    }
 
}

