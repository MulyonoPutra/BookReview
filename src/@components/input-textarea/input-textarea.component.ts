import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ValidationService } from 'src/@core/services/validation.service';

@Component({
	selector: 'app-input-textarea',
	templateUrl: './input-textarea.component.html',
	styleUrls: ['./input-textarea.component.scss'],
})
export class InputTextareaComponent {
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
