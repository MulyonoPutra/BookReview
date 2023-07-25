import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
	@Input() isDisabled!: boolean;
	@Input() label!: string;
	@Output() clicked = new EventEmitter<void>();

	onClick(): void {
		this.clicked.emit();
	}
}
