import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { PackageService } from 'src/app/service/package-service.service';
import { Project } from 'src/app/models/project-model';
import { Observable, Subscription } from 'rxjs';
import { Dependency } from 'src/app/models/dependency-model';
import { DevDependency } from 'src/app/models/devDependency-model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public selectedProject: Project;
  
  @Output() selectedProjectEvent = new EventEmitter<Project>();

  constructor(private packageService: PackageService) {}

  selectProject(project: Project) {
    if (!Array.isArray(project.dependencies)) {
      project.dependencies = Object.keys(project.dependencies).map(key => { return new Dependency(key, project.dependencies[key])});
    }

    if (!Array.isArray(project.devDependencies)) {
      project.devDependencies = Object.keys(project.devDependencies).map(key => { return new DevDependency(key, project.devDependencies[key])});
    }
    this.selectedProject = project;
    this.selectedProjectEvent.emit(this.selectedProject);
  }
}
