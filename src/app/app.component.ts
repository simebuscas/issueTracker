import { Component, OnInit } from '@angular/core';
import { IssuesService } from './issues.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  title = 'issueTracker';
  issueList: Object;

  constructor(private issues: IssuesService)
  {

  }

  ngOnInit() 
  {
    this.issues.getIssues().subscribe(issues => 
    {
      this.issueList = issues;
      console.log(this.issueList);
    });
  }

}
