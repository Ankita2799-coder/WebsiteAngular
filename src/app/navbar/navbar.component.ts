import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../Quiz-service/quiz.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
userLogin:boolean=false
  constructor(private qservice:QuizService,private router:Router) { }

  ngOnInit(): void {
    this.qservice.isLogin.asObservable().subscribe((data:any)=>
    {
      if(data == true)
      {
        this.userLogin=true
      }
      else{
        this.userLogin=false;
      }
    })
  }
  logOut()
  {
    this.qservice.logout();
    this.router.navigate([''])
    this.qservice.isLogin.next(false);
  }

}
