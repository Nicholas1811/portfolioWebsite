import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) {}
projectItem(str){
  this.router.navigate(['/tabs/Portfolio/project-item'])
  console.log(str)
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
