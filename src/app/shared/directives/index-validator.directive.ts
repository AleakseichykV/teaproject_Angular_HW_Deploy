import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";
import {Directive, Input} from "@angular/core";

export function indexValidator (pattern: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const result = new RegExp(pattern).test(control.value)
    return result ? null : {pattern: {value: control.value}}
  }
}

@Directive({
  selector: '[indexValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: IndexValidatorDirective, multi: true}
  ]
})
export class IndexValidatorDirective implements Validator{
  @Input('indexValidator') pattern = '';

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    return indexValidator(this.pattern)(control);
  }

}
