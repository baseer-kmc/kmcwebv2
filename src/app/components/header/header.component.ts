import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showSlide: boolean=false;
  
  ngOnInit(): void {
    const that = this;
    setTimeout(function () {
      that.showSlide=true;
    }, 2000);
  }
}
