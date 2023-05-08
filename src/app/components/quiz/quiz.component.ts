import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  public title: string = '';

  public questions: any;
  public selectedQuestion: any;

  public answers: string[] = [];
  public selectedAnswer: string = '';

  private questionIndex: number = 0;
  private questionMaxIndex: number = 0;

  public finished: boolean = false;
}
