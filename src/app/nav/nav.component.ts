
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  currentRoute;
  constructor(private router: Router) {   
console.log(this.router.url)
this.currentRoute = this.router.url
}

  ngOnInit() {}
  toRouter(){
    this.router.navigateByUrl('/')
  }
}
