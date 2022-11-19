import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassListComponent } from './classes/class-list/class-list.component';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { FlashcardListComponent } from './flashcards/flashcard-list/flashcard-list.component';
import { FlashcardEditComponent } from './flashcards/flashcard-edit/flashcard-edit.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClassItemComponent } from './classes/class-item/class-item.component';
import { DropdownDirective } from './header/dropdown.directive';
import { ClassDetailComponent } from './classes/class-detail/class-detail.component';
import { ClassEditComponent } from './classes/class-edit/class-edit.component';
import { FlashcardItemComponent } from './flashcards/flashcard-item/flashcard-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    ClassListComponent,
    FlashcardsComponent,
    FlashcardListComponent,
    FlashcardEditComponent,
    HeaderComponent,
    AuthComponent,
    ClassItemComponent,
    DropdownDirective,
    ClassDetailComponent,
    ClassEditComponent,
    FlashcardItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
