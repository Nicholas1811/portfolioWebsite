import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  openEmail(){
    window.location.href = "mailto:1907761I@student.tp.edu.sg";
  }
  openLinkedin(){
    window.open("https://www.linkedin.com/in/nicholas-soh-6b55ab171/")
  }
  openInstagram(){
    window.open("https://www.instagram.com/niicc.cc")
  }
  openFacebook(){
    window.open("https://www.facebook.com/nicsohdelin/")
  }
  openTwitter(){
    window.open("https://twitter.com/niicc_cc")
  }
}
