import { Component, OnInit } from '@angular/core';
import quizQuestions from '../../../assets/data/quiz_questions.json';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  public title: string = '';

  public questions: any;
  public selectedQuestion: any;

  public answers: string[] = [];
  public selectedAnswer: string = '';

  private questionIndex: number = 0;
  private questionMaxIndex: number = 0;

  public finished: boolean = false;

  public chooseOption(alias: string): void {
    this.answers.push(alias);
    this.nextRound();
  }

  private nextRound(): void {
    this.questionIndex++;

    if (this.questionIndex > this.questionMaxIndex) {
      this.finished = true;
      this.selectedAnswer = quizQuestions.results[this.getResult()];
    } else {
      this.selectedQuestion = this.questions[this.questionIndex];
    }
  }

  private getResult(): keyof typeof quizQuestions.results {
    return this.answers.reduce((prev, curr, i, arr) => {
      if (
        arr.filter((item) => item === prev).length >
        arr.filter((item) => item === curr).length
      ) {
        return prev;
      }
      return curr;
    }) as keyof typeof quizQuestions.results;
  }

  ngOnInit(): void {
    if (quizQuestions) {
      this.finished = false;
      this.title = quizQuestions.title;
      this.questions = quizQuestions.questions;

      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length - 1;

      this.selectedQuestion = this.questions[this.questionIndex];
    }
  }
}
