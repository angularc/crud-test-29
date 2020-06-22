import { Component, OnInit } from '@angular/core';
import { HomeService } from '../sharedSweetHome/home.service';
import {Home} from '../sharedSweetHome/home.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sweet-home-data',
  templateUrl: './sweet-home-data.component.html',
  styleUrls: ['./sweet-home-data.component.css']
})
export class SweetHomeDataComponent implements OnInit {

  constructor(public homeservice : HomeService) { }

  ngOnInit() {
    this.ResetHome();
  }

  ResetHome(form ? : NgForm){
   if(form != null)form.reset();
   this.homeservice.SelectedHome = {
     HomeTypeID : null,
     FullName : '',
     HAddress : '',
     Email : '',
     Contact : '',
     NumberofRooms : '',
     HBudjet  : ''

   }
  }
  onSubmit(form : NgForm){
       if(form.value.HomeTypeID == null){
         this.homeservice.PostMyHome(form.value).subscribe(data => {
           this.ResetHome(form);
           this.homeservice.GetHome();
         })
       }else{
         //puthome
         this.homeservice.PutMyHome(form.value.HomeTypeID, form.value).subscribe(data => {
           this.ResetHome(form);
           this.homeservice.GetHome();
         })
       }
  }


}
