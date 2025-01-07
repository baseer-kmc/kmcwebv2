import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showSlide: boolean=false;
  showNews: boolean=false;
  newsTitle: string="";
  newsContent: string="";
  
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    const that = this;
    this.newsService.getNews().subscribe(function(data: any){
      if(data.length>0){
        that.showNews=true;
        that.newsTitle = data[0].title;
        that.newsContent = data[0].content;
      }
      else{
        that.showNews=false;
      }
    });
    setTimeout(function () {
      that.showSlide=true;
    }, 2000);
  }

  getNews(){
    
  }
}
