import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/Quiz-service/quiz.service';
import { QuizComponent } from '../quiz/quiz.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
categories:any=[]
  constructor(private qservice:QuizService) { }

  ngOnInit(): void {
    this.qservice.getAllCategories().subscribe((data:any)=>
    {
      this.categories=data;

    },
    (error)=>
    {
      
    })
  }

}
