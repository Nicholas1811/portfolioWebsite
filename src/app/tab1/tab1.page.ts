import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
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
