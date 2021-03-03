import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.page.html',
  styleUrls: ['./project-item.page.scss'],
})
export class ProjectItemPage implements OnInit {
  projectArray;
  projectObject;
  hrefvar
  constructor(private projectsService: ProjectsService, private router: Router, private route: ActivatedRoute) {
    this.hrefvar = "/portfolio/project-item/" + localStorage.getItem("id");
    this.projectArray = [
      {
        id: "OpenHouse",
        name: "TPOH2021",
        des: "The TPOH2021 mobile application is an app made for prospective students who have interest in enrolling into Temasek Polytechnic for further education. Users can use this platform as a guide for them to know more about the courses, CCAs, in the school. In addition, my team has also built a game using Google Map's API within the application as well.",
        type: "Mobile Application",
        technologiesUsed: "<ul><li>HTML</li><li>CSS</li><li>Typescript</li><li>Cordova</li><li>Ionic Framework</li></ul>",
        achievedGrade: "N/A"
      },
      {
        id: "ieatifindimake",
        name: "ieatifindimake",
        des: "ieatifindimake is a mobile application made to solve the problem of the current Covid-19 situation. This app can serve as a solution to preparing meals during the pandemic as users can view recipes and interact with reviews. In addition, users can also purchase their groceries, making it a one-stop solution for their needs.",
        type: "Mobile Application",
        technologiesUsed: "<ul><li>HTML</li><li>CSS</li><li>Typescript</li><li>Cordova</li><li>Ionic Framework</li></ul>",
        achievedGrade: "A"
      },
      {
        id: "EZBEAT",
        name: "ieatifindimake",
        des: "EZBEAT is a mobile application which was created in my first year of polytechnic studies. It is a music player app made using Android Studios and Java. Users can play music, shuffle their music and loop it.",
        type: "Mobile Application",
        technologiesUsed: "<ul><li>HTML</li><li>CSS</li><li>Typescript</li><li>Cordova</li><li>Ionic Framework</li></ul>",
        achievedGrade: "A"
      }, {
        id: "TradeX",
        name: "ieatifindimake",
        des: "ieatifindigay",
        type: "Web Application",
        technologiesUsed: "<ul><li>HTML</li><li>CSS</li><li>Typescript</li><li>Cordova</li><li>Ionic Framework</li></ul>",
        achievedGrade: "A"
      }, {
        id: "KReviews",
        name: "ieatifindimake",
        des: "ieatifindigay",
        type: "Web Application",
        technologiesUsed: "<ul><li>HTML</li><li>CSS</li><li>Typescript</li><li>Cordova</li><li>Ionic Framework</li></ul>",
        achievedGrade: "A"
      },

    ]
    for (let i = 0; i < this.projectArray.length; i++) {
      if (this.projectArray[i].id == localStorage.getItem("id")) {
        console.log(this.projectArray[i])
        console.log(this.projectArray)
        console.log(localStorage.getItem("id"))
        this.projectObject = this.projectArray[i]
        break
      }
    }
    console.log(this.projectObject)



  }
  id: any;
  ngOnInit() {



  }

}
