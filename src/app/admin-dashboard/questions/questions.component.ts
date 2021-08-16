import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/Quiz-service/quiz.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  qid:any;
  qtitle:any;
  questions:any=[]
  constructor(private route:ActivatedRoute,private qservice:QuizService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.qid=this.route.snapshot.params.id;
    this.qtitle=this.route.snapshot.params.title;
    this.qservice.getQuestionsOfQuiz(this.qid).subscribe((response:any)=>
    {
      this.questions=response;
    },
    (error)=>
    {
      this._snackBar.open(" Sucessfull", "close", {
        duration: 3000,
      })
    })
  }
}
