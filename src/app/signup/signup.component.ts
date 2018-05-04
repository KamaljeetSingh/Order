import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { emailValidation } from '../email-validation.directive';
import { User } from '../../dbmodels/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  loading: boolean = false;
  @Input() opaque:boolean;
  @Output() toggle: EventEmitter<number> = new EventEmitter<number>();

  constructor(private fb:FormBuilder,private userService: UsersService) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.signUpForm = this.fb.group({
      userid: [null, [Validators.required, emailValidation()]],
      name: [null, [Validators.required]],
      pass: [null, [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit(){
    let userId: string = this.signUpForm.value.userid;
    let password: string = this.signUpForm.value.pass;
    let name: string = this.signUpForm.value.name;
    this.loading = true;

    this.userService.addUser({ userId,password,name }  as User)
      .subscribe(user => {
        setTimeout(() => {
            console.log(user);
            this.signUpForm.reset();
            this.loading = false;
        },2000)    
      });
  }

  emitEvent(){
      this.toggle.emit(2);
    }

}
