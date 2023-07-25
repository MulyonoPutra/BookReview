import { Component, OnInit } from '@angular/core';

import { Book } from 'src/@core/domain/book';
import { BookService } from 'src/@core/services/book.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SharedService } from 'src/@core/services/shared.service';

@Component({
	selector: 'app-book-list',
	templateUrl: './book-list.component.html',
	styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
	books!: Book[];

	constructor(
		private bookService: BookService,
		private sharedService: SharedService,
	) {}

	ngOnInit(): void {
		this.findAll();
	}

	private findAll(): void {
		this.bookService.findAll().subscribe({
			next: (response) => {
				this.books = response;
			},
			error: (error: HttpErrorResponse) => {
				alert(error);
			},
		});
	}

	protected onReview(name: string): void {
		this.sharedService.updateSharedData(name);
	}

	protected export() {
		this.bookService.findAll().subscribe({
			next: (response) => {
				const jsonString = JSON.stringify(response, null, 2);
				const blob = new Blob([jsonString], { type: 'application/json' });
				const url = window.URL.createObjectURL(blob);

				const link = document.createElement('a');
				link.href = url;
				link.download = 'data.json';
				link.click();
				window.URL.revokeObjectURL(url);
			},
		});
	}
}
