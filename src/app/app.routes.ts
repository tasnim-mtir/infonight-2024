import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { MainQuizComponent } from './main-quiz/main-quiz.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'quiz', component: MainQuizComponent },



];
