import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import questions from '../../../api/quiz.json'
import { QuestionService } from "../../api/question.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  currentQues = 1;
  totalQues = 0;
  quiz = questions.questions;
  id!: number;
  name!: string;
  answers: string[] = [];
  constructor(private route: ActivatedRoute, private router:Router, private qService:QuestionService ) { 
    this.route.queryParams
      .subscribe(params => {
        this.id = params.id;
        this.name = params.name;
      }
    );
  }
  
  fetchQuestions(){
    this.qService.getQuestion().subscribe((data)=>{
      console.log(1, data);
      this.totalQues = Number(data.NoOfQuestions)
      if(data.questions.length){
        const filterQuestion = data.questions.filter((indQues:any)=>{
          return indQues.currentQuestion === "true"
        })
        if(filterQuestion.length){
          this.quiz = filterQuestion;
        } else {
          this.quiz = data.questions[0];
        }
      }
    })
  }
  ngOnInit(): void {
    (function(d, m){
      var kommunicateSettings = {"appId":"346faabcd8a79a8aa7d7c36073b8f2b49","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      (window as any).kommunicate = m; m._globals = kommunicateSettings;
    })(document, (window as any).kommunicate || {});
    
    this.fetchQuestions()
    
  }

  ngOnDestroy() {
    (window as any).kommunicate.logout()
  }

  pre(){
    if(this.currentQues!== 0){
      this.currentQues-=1;
    }
  }
  next(){
    if(this.currentQues!== this.totalQues){
      this.currentQues+=1;
      this.fetchQuestions()
    }
  }

  submitTest(){
    this.router.navigate(['/assessment'], { replaceUrl: true });
  }

}
