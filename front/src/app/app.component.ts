import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { NgxSkeletonLoaderComponent } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias-unsl';
  loader = true;
  data: any[] | undefined;  

  constructor(private app: AppService){

  }

  ngOnInit() {

    this.app.getPosts().subscribe((ret: any[])=>{
      setTimeout(()=>{
        this.data = ret;
        this.loader = false;
      }, 3000);
    })
  }
}


