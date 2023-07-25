import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookReviewComponent } from './book/book-review/book-review.component';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from 'src/@components/components.module';
import { NewBookComponent } from './book/new-book/new-book.component';
import { ShortenerTextPipe } from 'src/@core/pipe/shortener-text.pipe';

@NgModule({
	declarations: [AppComponent, BookReviewComponent, NewBookComponent, BookListComponent],
	imports: [BrowserModule, AppRoutingModule, ComponentsModule, FormsModule, ReactiveFormsModule, ShortenerTextPipe],
	providers: [],
	bootstrap: [AppComponent],
	exports: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
