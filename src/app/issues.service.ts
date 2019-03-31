import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class IssuesService {

  readonly angularURL : string = 'https://api.github.com/repos/angular/angular/issues';

  constructor(private http: HttpClient) { }

  getIssues(page:number)
  {
    let params= new HttpParams().set('page',page.toString());
    return this.http.get(this.angularURL,{params,observe:'response'});
  }
}
