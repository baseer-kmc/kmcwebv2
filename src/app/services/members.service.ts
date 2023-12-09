import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) { }

  getMembersList() {
    let functionsPath = `${environment.functionsPath}/listnewAlumniMembers`
    return this.http.get(`${functionsPath}`);
  }

  addNewMember(member: any){
    let functionsPath = `${environment.functionsPath}/addNewMemberFunction`
    return this.http.post(`${functionsPath}`,member);
  }
}
