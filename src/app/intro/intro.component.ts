import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import * as $ from 'jquery';
import { InfoService } from 'src/app/info.service'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  name:String|undefined = "";

  constructor(public _service: InfoService) {
  }
  
  ngOnInit(): void {
    $(function () {
      $('.navbar-collapse ul.navbar-nav li.nav-item a').on('click touchstart', function (e) {
        if(!location.href.endsWith($(this).attr("href")+"")){
          $('.navbar-collapse ul.navbar-nav li.nav-item a').removeClass("active");
          $(this).addClass("active");
          location.href = location.href?.split("#")[0] + $(this).attr("href");
        }
        setTimeout(function (){
          if ($('.navbar-toggler').is(":visible"))
            $('.navbar-toggler').click();
        },50);
      });
    });
    let refreshIntervalId = setInterval(()=>{
      if (this._service.loaded == true){
        /*--/ Star Typed /--*/
        if ($('.name-slider').length == 1) {
          var typed_strings = $('.name-slider-items').text();
          var typed = new Typed('.name-slider', {
            strings: typed_strings.split(','),
            typeSpeed: 80,
            loop: false,
            backDelay: 1100,
            backSpeed: 30,
            showCursor: false
          });
        }
        if ($('.text-slider').length == 1) {
          var typed_strings = $('.text-slider-items').text();
          var typed = new Typed('.text-slider', {
            strings: typed_strings.split(','),
            typeSpeed: 80,
            loop: true,
            backDelay: 1100,
            backSpeed: 0,
            showCursor: false,
            shuffle: true
          });
        }
        clearInterval(refreshIntervalId);
      } 
    }, 100);

      
  }

}
