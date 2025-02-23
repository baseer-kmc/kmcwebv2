import { Component } from '@angular/core';
import { CommiteeMembersService } from 'src/app/services/commiteemembers.service';

@Component({
  selector: 'app-previouscommitee',
  templateUrl: './previouscommitee.component.html',
  styleUrls: ['./previouscommitee.component.css']
})
export class PreviouscommiteeComponent {
  dataLoaded: boolean = false;
  itemsList: any;
  
  constructor(private commiteeMembersService: CommiteeMembersService) { }

  ngOnInit(): void {
    this.commiteeMembersService.getMembers().subscribe((members: any) => {
      
      this.itemsList = members;
      this.dataLoaded = true;
    });
  }

}
