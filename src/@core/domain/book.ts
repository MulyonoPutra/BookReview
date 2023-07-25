import { Review } from './review';

export interface Book {
	name: string;
	year: number;
	reviews: Review[];
}
