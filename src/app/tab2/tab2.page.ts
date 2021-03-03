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
  let navigationExtras: NavigationExtras = { state: { str: str } };
  this.router.navigate(['/portfolio/project-item', str], navigationExtras);
  localStorage.setItem("id",str);

}
openLinkedin(){
  window.open("https://www.linkedin.com/in/nicholas-soh-6b55ab171/")
}
openIg(){
  window.open("https://www.instagram.com/niicc.cc")
}
openFb(){
  window.open("https://www.facebook.com/nicsohdelin/")
}
openTwitter(){
  window.open("https://twitter.com/niicc_cc")
}
}
