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
        .map(x => x.year)
        .uniq()
        .orderBy(x=> Number(x), 'asc')
        .value();

      console.log('categoryList',this.categoryList);

      this.selectedCategory = this.categoryList[0];
      this.categoryItemsList = _.chain(this.itemsList)
        .filter((x: any) => x.year === this.selectedCategory)
        .orderBy('serialNumber')
        .value();
      this.dataLoaded = true;
    });
  }

  switchCategory() {
    this.categoryItemsList = _.chain(this.itemsList)
      .filter((x: any) => x.year === this.selectedCategory)
      .orderBy('serialNumber')
      .value();
  }

}
