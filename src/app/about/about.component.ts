import { Component, OnInit } from '@angular/core';
import { InfoService} from 'src/app/info.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public _service: InfoService) { }

  ngOnInit(): void {
  }

}
