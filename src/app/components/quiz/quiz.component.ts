import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import questions from '../../../api/quiz.json'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  currentQues = 0;
  quiz = questions.questions;
  id!: number;
  name!: string;
  constructor(private route: ActivatedRoute) { 
    this.route.queryParams
      .subscribe(params => {
        this.id = params.id;
        this.name = params.name;
      }
    );
  }
  
  ngOnInit(): void {
  }

  pre(){
    if(this.currentQues!== 0){
      this.currentQues-=1;
    }
  }
  next(){
    if(this.currentQues!== 9){
      this.currentQues+=1;
    }
  }

}
