import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Book } from 'src/@core/domain/book';
import { BookService } from 'src/@core/services/book.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Review } from 'src/@core/domain/review';
import { SharedService } from 'src/@core/services/shared.service';
import { ValidationService } from 'src/@core/services/validation.service';

@Component({
	selector: 'app-book-review',
	templateUrl: './book-review.component.html',
	styleUrls: ['./book-review.component.scss'],
})
export class BookReviewComponent implements OnInit {
	protected form!: FormGroup;
	protected books!: Book[];
	protected isShowReview: boolean = false;
	protected reviews!: Review[];
	protected bookName!: string;

	constructor(
		private fb: FormBuilder,
		private bookService: BookService,
		private sharedService: SharedService,
		private validation: ValidationService,
	) {}

	ngOnInit(): void {
		this.formInitialized();
		this.onReceive();
	}

	formInitialized(): void {
		this.form = this.fb.group(
			{
				email: ['', [Validators.required, Validators.email]],
				note: ['', Validators.required],
				star: [null, Validators.required],
			},
			// { validator: this.validation.rangeValidator() }
		);
	}

	get formValue() {
		return {
			email: this.form.get('email')?.value,
			note: this.form.get('note')?.value,
			star: this.form.get('star')?.value,
		};
	}

	protected getFormControl(form: string): FormControl {
		return this.form.get(form) as FormControl;
	}

	protected onReceive(): void {
		this.sharedService.sharedData$.subscribe((data) => {
			if (data) {
				this.isShowReview = true;
				this.bookName = data;
				this.findOne(data);
			}
		});
	}

	protected add() {
		if (this.form.valid) {
			this.bookService.addReviewToBook(this.bookName, this.formValue);
			this.form.reset();
		}
	}

	private findOne(name: string): void {
		this.bookService.findByName(name).subscribe({
			next: (response) => {
				this.reviews = response!.reviews;
			},
			error: (error: HttpErrorResponse) => {
				alert(error);
			},
		});
	}

	protected getRange(n: number): number[] {
		return [...Array(n).keys()].map((i) => i + 1);
	}
}
