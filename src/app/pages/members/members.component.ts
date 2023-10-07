import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  dataLoaded: boolean = false;
  itemsList: any;
  categoryList: any;
  selectedCategory: any;
  categoryItemsList: any;

  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
    this.membersService.getMembersList().subscribe((members: any) => {
      this.itemsList = members;
      this.categoryList = _.chain(this.itemsList)
        .map(x => x.Year)
        .uniq()
        .value();

      this.selectedCategory = this.categoryList[0];
      this.categoryItemsList = _.chain(this.itemsList)
        .filter((x: any) => x.Year === this.selectedCategory)
        .orderBy('SerialNumber')
        .value();
      this.dataLoaded = true;
      console.log('this.categoryItemsList', this.categoryItemsList);
    });
  }

  switchCategory() {
    this.categoryItemsList = _.chain(this.itemsList)
      .filter((x: any) => x.Year === this.selectedCategory)
      .orderBy('SerialNumber')
      .value();
  }

}
