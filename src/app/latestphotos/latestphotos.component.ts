import { Photos } from './../img';
import { Component, OnInit } from '@angular/core';
import {filter} from 'rxjs/operators';



@Component({
  selector: 'app-latestphotos',
  templateUrl: './latestphotos.component.html',
  styleUrls: ['./latestphotos.component.scss']
})
export class LatestphotosComponent implements OnInit {
  photos=Photos;


 latest=Photos.filter(photo=>photo.Date>="2021-11-20");





  constructor(){}

  ngOnInit(): void {
  }

}
