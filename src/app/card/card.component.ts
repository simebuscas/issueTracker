import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  issueList: Object;
  currentPage : number = this.issues.page;
  pageSize : number=this.issues.pageSize;
  collectionSize : number = this.issues.collectionSize
  constructor(private issues: IssuesService)
  {}

  ngOnInit() 
  {
    this.loadData(this.currentPage);
  }

  loadData(event:any)
  {
    this.issues.getPage(event).subscribe(issues => 
    {
      this.issueList = issues;
    });
  }
}
