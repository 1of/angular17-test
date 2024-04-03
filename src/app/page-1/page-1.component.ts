import {Component, HostListener, OnInit} from '@angular/core';
import {JsonplaceholderService} from "../services/jsonplaceholder.service";

@Component({
  selector: 'app-page-1',
  templateUrl: './page-1.component.html',
  styleUrl: './page-1.component.scss'
})


export class Page1Component implements OnInit{
  posts: any[] = []; // data
  _start = 0; // jsonplaceholder param
  _limit = 20; // jsonplaceholder param
  fetched: boolean = false;
  stopFetch: boolean = false;
  constructor(private jsonplaceholderService: JsonplaceholderService) {
  }
  @HostListener("window:scroll", [])
  onScroll(): void {
    if (this.stopFetch) return
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if((pos+267 > max) && !this.fetched)   { //200px block + 65px header + 2px margin its block height
      this.getPosts();
    }
  }
  ngOnInit() {
    this._start = 0;
    this.getPosts();
  }

  getPosts() {
    this.fetched = true;
    this.jsonplaceholderService.getPosts(this._start, this._limit).subscribe((posts: any) => {
      this._start = this._start + 20;
      if(this._start) {
        this.posts = [...this.posts, ...posts];
        if (!this.posts.length) {
          this._start = this._start - 20;
        }
      } else {
        this.posts = posts;
      }
      if (!posts.length) {
        this.stopFetch = true;
      }

      this.fetched = false;
    })
  }

}
