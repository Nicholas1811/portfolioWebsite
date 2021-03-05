import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

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
  toRouter(){
    this.router.navigateByUrl('/')
  }

}
