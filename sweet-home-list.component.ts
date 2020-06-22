import { Component, OnInit } from '@angular/core';
import { HomeService } from '../sharedSweetHome/home.service';
import {Home} from '../sharedSweetHome/home.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sweet-home-list',
  templateUrl: './sweet-home-list.component.html',
  styleUrls: ['./sweet-home-list.component.css']
})
export class SweetHomeListComponent implements OnInit {

  constructor(public homeservice : HomeService) { }

  ngOnInit() {
    this.homeservice.GetHome();
  }
  showmyhome(hoho : Home){
    this.homeservice.SelectedHome = Object.assign({}, hoho);
  }
  onDelete(id : number){
    if(confirm ('u want to delete this')==true){
      this.homeservice.DeleteMyHome(id).subscribe(c => {
        this.homeservice.GetHome();
      })
    }
  }

}
