import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RedditDBService } from './reddit-db.service';
import { Child, TopLevelData, RedditPosts } from './RedditPosts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], providers: [RedditDBService]

})
export class AppComponent implements OnInit{


  title = 'Reddit';

  redditTopTen: Child[] = [];

  constructor(private redditDB: RedditDBService)
  {
  }
  
  ngOnInit(): void{
    
    this.TopTenRedditPosts("aww");
  }

  TopTenRedditPosts(name:string):void
  {
    this.redditDB.GetPostByName(name).subscribe((result:RedditPosts) => {
      for (let i:number = 0; i < 10; i++)
      {
        this.redditTopTen.push(result.data.children[i]);
      }
      for (let i = 0; i < this.redditTopTen.length; i++)
      {
        console.log(`Title: ${this.redditTopTen[i].data.title}\nURL: ${this.redditTopTen[i].data.thumbnail}`);
      }
      //console.log(this.redditTopTen);
    });
    
  }
}
