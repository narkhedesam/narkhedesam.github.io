import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/info.service'
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(public _service:InfoService) { }

  ngOnInit(): void {
  }

}
