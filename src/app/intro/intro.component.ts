import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      /*--/ Star Typed /--*/
      if ($('.text-slider').length == 1) {
        var typed_strings = $('.text-slider-items').text();
        var typed = new Typed('.text-slider', {
          strings: typed_strings.split(','),
          typeSpeed: 80,
          loop: true,
          backDelay: 1100,
          backSpeed: 30
        });
      }
  }

}
