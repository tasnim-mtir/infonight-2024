import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { MainQuizComponent } from './main-quiz/main-quiz.component';
import { FlashcardsComponent } from './flashcards/flashcards.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'quiz', component: MainQuizComponent },
    { path: 'flashcard', component: FlashcardsComponent },





];
