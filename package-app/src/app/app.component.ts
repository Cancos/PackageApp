import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PackageService } from './service/package-service.service';
import { Project } from './models/project-model';
import { Dependency } from './models/dependency-model';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private selectedProject: Project;
  public tempName;
  
  constructor(private packageService: PackageService) {
    this.packageService.init();
  }

  updateSelectedProject(selectedProject) {
    this.selectedProject = selectedProject;
  }
}
