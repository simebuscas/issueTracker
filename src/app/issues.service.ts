import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(private http: HttpClient) { }

  getIssues()
  {
    return this.http.get('https://api.github.com/repos/angular/angular/issues?per_page=20')
  }
}
