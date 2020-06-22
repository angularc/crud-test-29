import { Component, OnInit } from '@angular/core';
import { HomeService } from './sharedSweetHome/home.service';

@Component({
  selector: 'app-master-home',
  templateUrl: './master-home.component.html',
  styleUrls: ['./master-home.component.css'],
  providers : [HomeService],
})
export class MasterHomeComponent implements OnInit {

  constructor(public homeservice : HomeService) { }

  ngOnInit() {
  }

}
