import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../dbmodels/user';
import { emailValidation } from '../email-validation.directive';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userExist:boolean = true;
  loading:boolean = false;
  @Input() opaque:boolean;
  @Output() toggle: EventEmitter<number> = new EventEmitter<number>();

  constructor(private fb: FormBuilder,
        private userService: UsersService, private router: Router,
        private activatedRoute: ActivatedRoute) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.loginForm = this.fb.group({
      userid: [null, [Validators.required, emailValidation()]],
      pass: [null, [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit(){
    let userId:string = this.loginForm.value.userid;
    let password:string = this.loginForm.value.pass;
    this.loading = true;

    this.userService.checkUser({ userId,password }  as User)
      .subscribe(user => {
        setTimeout(() => {
          if(Object.keys(user).length == 0 || user[0].password != password)
            {
              this.userExist = false;
              this.loginForm.controls['pass'].reset();
              this.loading = false;
            }
          else{
            this.loginForm.reset();
            this.loading = false;
            localStorage.setItem('loggedIn','true');
            this.router.navigate(['./shopping']);
        }},2000)    
      });
    }
    
    emitEvent(){
      this.toggle.emit(1);
    }

}
