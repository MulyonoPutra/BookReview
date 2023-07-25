import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ValidationService } from 'src/@core/services/validation.service';

@Component({
	selector: 'app-form-field',
	templateUrl: './form-field.component.html',
	styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent {
	@Input() label!: string;
	@Input() fieldName!: string;
	@Input() placeholder?: string;
	@Input() formGroup!: FormGroup;

	constructor(private validation: ValidationService) {}

	get isInvalid() {
		const control = this.formGroup.get(this.fieldName) as FormControl;
		return this.validation.isInvalid(control);
	}

	get getErrorMessage(): string {
		const control = this.formGroup.get(this.fieldName) as FormControl;
		return this.validation.getErrorMessage(control);
	}
}
