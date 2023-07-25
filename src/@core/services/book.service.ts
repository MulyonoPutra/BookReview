import { Observable, catchError, of, throwError } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../domain/book';
import { Review } from '../domain/review';

@Injectable({
	providedIn: 'root',
})
export class BookService {
	private data = [
		{
			name: 'Harry Potter',
			year: 2010,
			reviews: [
				{
					email: 'john.doe@gmail.com',
					note: 'Great book to read',
					star: 5,
				},
				{
					email: 'jane.doe@gmail.com',
					note: 'Mediocre book to read',
					star: 3,
				},
			],
		},
		{
			name: 'The Hunger Games',
			year: 2012,
			reviews: [
				{
					email: 'john.doe@gmail.com',
					note: 'Amazing book to read',
					star: 4,
				},
			],
		},
	];

	constructor() {}

	findAll(): Observable<Book[]> {
		return of(this.data).pipe(catchError(this.handleError));
	}

	findByName(name: string): Observable<Book | undefined> {
		const book = this.data.find((book) => book.name === name)!;
		return of(book);
	}

	addBook(book: Book) {
		if (!book.reviews) {
			book.reviews = [];
		}
		this.data.push(book);
	}

	addReviewToBook(bookName: string, review: Review) {
		this.findByName(bookName).subscribe((book) => {
			if (book) {
				if (!book.reviews) {
					book.reviews = [];
				}
				book.reviews.push(review);
			}
		});
	}

	private handleError(res: HttpErrorResponse | any) {
		console.error(res.error || res.body.error);
		return throwError(() => new Error('Internal Server Error'));
	}
}
