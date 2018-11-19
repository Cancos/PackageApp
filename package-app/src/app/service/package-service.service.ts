import { Injectable, OnInit } from '@angular/core';
import { Project } from '../models/project-model';
import { Dependency } from '../models/dependency-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DevDependency } from '../models/devDependency-model';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private mockConfig = {
    projects: [
      {
        name: "Package App",
        packageJsonUrl: "https://raw.githubusercontent.com/Cancos/PackageApp/master/package-app/package.json" 
      },
      {
        name: "Ionic Udemy",
        packageJsonUrl: "https://raw.githubusercontent.com/Cancos/IonicUdemy/master/ionicBasics/package.json" 
      },
      {
        name: "Just Dashboard",
        packageJsonUrl: "https://raw.githubusercontent.com/kantord/just-dashboard/master/package.json" 
      }
    ]
  };
  private projectList: Project[] = [];
  
  constructor(private http: HttpClient) {}

  init() {
    const projectObsList: Observable<Project>[] =  this.mockConfig.projects.map((data: {name:string, packageJsonUrl: string}) => {
      return this.getProjectPackageInfo(data.packageJsonUrl, data.name);
   });
   
   projectObsList.forEach((projectObs: Observable<Project>) => {
      projectObs.subscribe((project: Project) => this.projectList.push(project));
    });
  }

  getAllProjects(): Project [] {
    return this.projectList;
  }

  getProjectPackageInfo(url: string, name?: string): Observable<Project>  {
    return this.http.get<Project>(url).pipe(map((project) => {
      (name) ? project.preferredName = name : project.preferredName = project.name;
      return project;
    }));
  }
}
