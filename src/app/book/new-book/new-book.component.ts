import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { BookService } from 'src/@core/services/book.service';

@Component({
	selector: 'app-new-book',
	templateUrl: './new-book.component.html',
	styleUrls: ['./new-book.component.scss'],
})
export class NewBookComponent implements OnInit {
	protected form!: FormGroup;

	constructor(
		private fb: FormBuilder,
		private bookService: BookService,
	) {}

	ngOnInit(): void {
		this.formInitialized();
	}

	formInitialized(): void {
		this.form = this.fb.group({
			name: ['', Validators.required],
			year: [null, Validators.required],
		});
	}

	get formValue() {
		return {
			name: this.form.get('name')?.value,
			year: this.form.get('year')?.value,
		};
	}

	protected getFormControl(form: string): FormControl {
		return this.form.get(form) as FormControl;
	}

	protected add() {
		if (this.form.valid) {
			const newBook = {
				name: this.formValue.name,
				year: this.formValue.year,
				reviews: [],
			};
			this.bookService.addBook(newBook);
		}
	}
}
