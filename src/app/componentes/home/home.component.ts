import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  salir=false;

  constructor() {
    $(document).ready(function(){
      $('.nav_btn').click(function(){
        $('.mobile_nav_items').toggleClass('active');
      });
    });
   }

  ngOnInit(): void {
  }

}
