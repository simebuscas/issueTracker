import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class IssuesService {

  constructor(private http: HttpClient) { }
  gitURL : string = 'https://api.github.com/repos/angular/angular/issues';
  page : number = 1;
  maxPage: number = 91;
  pageSize : number=30;
  collectionSize : number=90;
  requestURL : string = this.gitURL + '?page=' + this.page;

  getIssues()
  {
    return this.http.get(this.requestURL);
  }

  getPage(page:number)
  {
    if(page<=this.maxPage && page>0)
    {
      this.page=page;
    }
    else
    {
      this.page=1;
    }
    this.requestURL = this.gitURL + '?page=' + this.page;
    return this.getIssues();
  }
}
