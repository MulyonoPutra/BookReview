import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ValidationService } from 'src/@core/services/validation.service';

@Component({
	selector: 'app-input-number',
	templateUrl: './input-number.component.html',
	styleUrls: ['./input-number.component.scss'],
})
export class InputNumberComponent {
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
