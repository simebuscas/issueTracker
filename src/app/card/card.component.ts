import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  issueList: Object;
  link:any;
  currentPage = 1;
  pageSize : number= 30;
  collectionSize : number;
  constructor(private issues: IssuesService)
  {}

  ngOnInit() 
  {
    this.loadData(this.currentPage);
  }

  loadData(event:any)
  {
    this.currentPage = event;
    this.issues.getIssues(event).subscribe(issues => 
    {
      this.issueList = issues.body;
      this.link = issues.headers.get('Link');
      //extracts the last page value from the header link string
      this.collectionSize = this.pageSize * ((this.link.substring(this.link.split('rel="last"')[0].lastIndexOf('page=')).split('page=')[1].split('>')[0])-1);
    });
  }
  
}
