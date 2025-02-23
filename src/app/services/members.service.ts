import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) { }

  getMembersList() {
    let listMembersPath = `${environment.apiPath}/web/Members`
    return this.http.get(listMembersPath);
  }

  addNewMember(member: any){
    let addNewMemberPath = `${environment.apiPath}/web/SubmitRegistration`
    return this.http.post(addNewMemberPath,member);
  }
}
