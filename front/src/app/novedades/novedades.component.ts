import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {

  data: any;
  loader: any;

  constructor(private app: AppService) { }

  ngOnInit() {

    this.app.getPosts().subscribe((ret: any[])=>{
      setTimeout(()=>{
        this.data = ret;
        this.loader = false;
      }, 10);
    })
  }
}
