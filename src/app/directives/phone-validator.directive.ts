import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";
import {Directive, Input} from "@angular/core";

export function phoneValidator (pattern: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const result = new RegExp(pattern).test(control.value)
    return result ? null : {pattern: {value: control.value}}
  }
}

@Directive({
  selector: '[phoneValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: PhoneValidatorDirective, multi: true}
  ]
})
export class PhoneValidatorDirective implements Validator{
  @Input('phoneValidator') pattern = '';

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    return phoneValidator(this.pattern)(control);
  }

}
