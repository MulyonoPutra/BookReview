import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';

@NgModule({
	declarations: [
		ButtonComponent,
		CardContainerComponent,
		FormFieldComponent,
		InputTextareaComponent,
		InputNumberComponent,
	],
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
	exports: [
		ButtonComponent,
		CardContainerComponent,
		FormFieldComponent,
		InputTextareaComponent,
		InputNumberComponent,
	],
})
export class ComponentsModule {}
