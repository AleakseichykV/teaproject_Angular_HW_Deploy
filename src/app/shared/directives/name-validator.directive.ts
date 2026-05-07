import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";
import {Directive, Input} from "@angular/core";

export function nameValidator (pattern: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const result = new RegExp(pattern).test(control.value)
    return result ? null : {pattern: {value: control.value}}
  }
}

@Directive({
  selector: '[nameValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: NameValidatorDirective, multi: true}
  ]
})
export class NameValidatorDirective implements Validator{
  @Input('nameValidator') pattern = '';

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    return nameValidator(this.pattern)(control);
  }

}
