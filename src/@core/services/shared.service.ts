import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class SharedService {
	private sharedDataSubject = new BehaviorSubject<any>(null);
	sharedData$ = this.sharedDataSubject.asObservable();

	updateSharedData(data: any) {
		this.sharedDataSubject.next(data);
	}

	constructor() {}
}
