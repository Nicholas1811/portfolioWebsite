import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) {}
projectItem(str){
  let navigationExtras: NavigationExtras = { 
    queryParams: { 
      special: str
    } 
  };
  console.log(navigationExtras)
  this.router.navigate(['portfolio/project-item'], navigationExtras);
}
}
