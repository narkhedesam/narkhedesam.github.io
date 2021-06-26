import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { authorInfo } from 'src/app/interfaces/authorInfo';
@Injectable({
  providedIn: 'root'
})
export class InfoService {
  info: authorInfo = {};
  loaded = false;
  profile: any = {};
  profileLoaded = false;
  age = 0;
  projectsLoaded = false;
  projects: any[] = [];
  

  constructor(private http: HttpClient) {
    this.age = this.calculateAge(new Date("10-06-1995"));
    this.loadInfo();
    this.loadProfile();
    this.loadProjects();
   }
  calculateAge(birthdate: Date) {
    let timeDiff = Math.abs(Date.now() - birthdate.getTime());
    return Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
  }

  private async loadInfo() {
    await this.http.get('assets/data/author.data.json')
      .subscribe((resp: authorInfo) => {
        this.info = resp;
        this.loaded = true;
      });
  }

  private loadProfile() {
    this.http.get('assets/data/profile.data.json')
      .subscribe((resp: any) => {
        this.profile = resp;
        this.profileLoaded = true;
      });
  }

  private loadProjects() {
    this.http.get('assets/data/projects.data.json')
      .subscribe((resp: any) => {
        this.projects = resp.projects;
        this.projectsLoaded = true;
      });
  }

}
