import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommiteeMembersService {

  constructor(private http: HttpClient) { }

  getMembers() {
    let commiteeMembersPath = `${environment.apiPath}web/CommiteeMembers`
    return this.http.get(commiteeMembersPath);
  }
}
