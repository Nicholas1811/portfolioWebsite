import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ProjectsService } from '../projects.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router, private projectsService: ProjectsService) {}
projectItem(str){
  let navigationExtras: NavigationExtras = { queryParams: { special: JSON.stringify(str) } };
  this.router.navigate(['/portfolio/project-item', str], navigationExtras);
}
}
