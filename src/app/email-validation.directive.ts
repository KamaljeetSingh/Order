import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

export function emailValidation(): ValidatorFn{
  return (control: AbstractControl):{[key:string]:boolean} => {
    let email_regex = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return email_regex.test(control.value) ? null : {'emailNotValid': true}; 
  }
}

@Directive({
  selector: '[appEmailValidation]'
})
export class EmailValidationDirective {

  constructor() { }

}
