import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ValidationService {

  constructor() {}

	isInvalid(control: FormControl): boolean {
		return control && control.touched && control.invalid;
	}

	rangeValidator(): ValidatorFn {
    const pattern = /^[0-5]+$/;
		return (control: AbstractControl): { [key: string]: any } | null => {
			const valid = pattern.test(control.value);
			return valid ? null : { invalidRange: true };
		};
	}

	getErrorMessage(control: FormControl): string {
		if (control.errors?.['required']) {
			return 'This field is required.';
		}
		if (control.errors?.['email']) {
			return 'Invalid email format.';
		}
		if (control.errors?.['minlength']) {
			const requiredLength = control.errors['minlength'].requiredLength;
			return `Password should be at least ${requiredLength} characters long.`;
		}
		if (control.errors?.['passwordMismatch']) {
			return 'Passwords do not match.';
		}
		if (control.errors?.['invalidPhoneNumber']) {
			return 'Invalid phone number format.';
		}
		if (control.errors?.['invalidRange']) {
			return 'Input must be a number from 0 to 5.';
		}

		return '';
	}
}
