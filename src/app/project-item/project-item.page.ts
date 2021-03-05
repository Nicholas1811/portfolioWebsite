import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.page.html',
  styleUrls: ['./project-item.page.scss'],
})
export class ProjectItemPage implements OnInit {
  projectArray;
  projectObject;
  hrefvar;
  slideperview;
  segmentModel = "brief";
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    allowTouchMove: false,
    speed: 500,
    loop: true
  };
 

  constructor(private router: Router) {


    this.hrefvar = "/portfolio/project-item/" + localStorage.getItem("id");
    this.projectArray = [
      {
        id: "OpenHouse",
        name: "TPOH2021",
        des: "The TPOH2021 mobile application is an app made for prospective students who have interest in enrolling into Temasek Polytechnic for further education. Users can use this platform as a guide for them to know more about the courses, CCAs, in the school. In addition, my team has also built a game using Google Map's API within the application as well. As of 04/03/2021, the app has gathered 925 downloads.",
        type: "Mobile Application",
        technologiesUsed: "<ul><li>HTML</li><li>SCSS</li><li>Typescript</li><li>Cordova</li><li>Ionic Framework</li><li>Realtime Database</li></ul>",
        achievedGrade: "For this project, grading is not applicable as it is a project belonging to Temasek Polytechnic.",
        image: ["https://firebasestorage.googleapis.com/v0/b/portfolio-73db1.appspot.com/o/port1.png?alt=media&token=84c9c0fa-fb2f-4d5c-b96c-7a5c608534df",
          "https://firebasestorage.googleapis.com/v0/b/portfolio-73db1.appspot.com/o/OHSS.png?alt=media&token=e3f40a32-ce26-4898-98ff-db95dbc8c8d1",
          "https://firebasestorage.googleapis.com/v0/b/portfolio-73db1.appspot.com/o/OHSS1.png?alt=media&token=9d7e0b77-ac6f-4d1a-95cc-9d6d659ef120",
          "https://firebasestorage.googleapis.com/v0/b/portfolio-73db1.appspot.com/o/OHSS2.png?alt=media&token=be7b6810-3962-4219-8b89-7b65d98a4133",
          "https://firebasestorage.googleapis.com/v0/b/portfolio-73db1.appspot.com/o/OHSS3.png?alt=media&token=910a895f-5edb-4b51-9c58-6d5b4f8b0e00",
          "https://firebasestorage.googleapis.com/v0/b/portfolio-73db1.appspot.com/o/OHSS4.png?alt=media&token=02975455-827d-42ac-83ab-04bcdc3d5ac3",
        ]
      },
      {
        id: "ieatifindimake",
        name: "ieatifindimake",
        des: "ieatifindimake is a mobile application made to solve the problem of the current Covid-19 situation. This app can serve as a solution to preparing meals during the pandemic as users can view recipes and interact with reviews. In addition, users can also purchase their groceries, making it a one-stop solution for their needs. Social Sharing functionalities are also incoporated into the mobile application as well.",
        type: "Mobile Application",
        technologiesUsed: "<ul><li>HTML</li><li>SCSS</li><li>Typescript</li><li>Cordova</li><li>Ionic Framework</li><li>Cloud Firestore</li></ul>",
        achievedGrade: "I have achieved an A Grade.",
        image: ["https://firebasestorage.googleapis.com/v0/b/portfolio-73db1.appspot.com/o/ieatifindimake1.png?alt=media&token=35344789-07bf-4f05-b9f7-4881450103ce",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-73db1.appspot.com/o/ieatifindimake2.png?alt=media&token=acca5b79-22ce-43ee-bcf6-a1ee8df0d626",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-73db1.appspot.com/o/ieatifindimake3.png?alt=media&token=4e2bf017-86af-45b5-b42b-9b4a5e3e3c1b",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-73db1.appspot.com/o/ieatifindimake4.png?alt=media&token=a6476cd3-d14a-471f-afc4-69729560397e",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-73db1.appspot.com/o/ieatifindimake5.png?alt=media&token=be43ea45-30b5-4286-bc4a-ee3d31572b34"
      ]
      }, {
        id: "TradeX",
        name: "TradeX",
        des: "TradeX is a web application created to demostrate the understanding of Open Banking APIs. It allows users to buy financial assets. I did the portion on US Equities, which allows users to view stock prices, purchase stock prices, view financial statements and their investment portfolio. Lastly, users can also add equities into their watchlist.",
        type: "Web Application",
        technologiesUsed: "<ul><li>HTML</li><li>CSS</li><li>Flask</li><li>Javascript</li></ul>",
        achievedGrade: "As of 04/03/2020, the grade for this project has not been released.",
        image: ["../../assets/OBKD1.png",
        "../../assets/OBKD2.png",
        "../../assets/OBKD3.png",
        "../../assets/OBKD4.png",
        "../../assets/OBKD5.png"
      ]
      }, {
        id: "KReviews",
        name: "KReviews",
        des: "KReviews is a web application developed to demostrate basic understanding of Web Development. It is a restaurant review website. Some of the functionalities include, basic CRUD of reviews and user information, integration with Google Maps API, searching capabilities, amongst others. Users can rate and place reviews on these restaurants. ",
        type: "Web Application",
        technologiesUsed: "<ul><li>HTML</li><li>CSS</li><li>Javascript</li><li>Node.js</li><li>MySQL</li></ul>",
        achievedGrade: "I have achieved an A Grade.",
        image: ["../../assets/CDEV1.png",
        "../../assets/CDEV2.png",
        "../../assets/CDEV3.png",
        "../../assets/CDEV4.png"
      ]
      },

    ]
    for (let i = 0; i < this.projectArray.length; i++) {
      if (this.projectArray[i].id == localStorage.getItem("id")) {
        this.projectObject = this.projectArray[i]
        break
      }
    }
    for (let a = 0; a < this.projectArray.length; a++) {
      if (this.projectArray[a].id == localStorage.getItem("id")) {
        const index = this.projectArray.indexOf(this.projectArray[a]);
        this.projectArray.splice(index, 1)
      }
    }
    console.log(this.projectArray)
  }
  id: any;
  ngOnInit() { }
  segmentChanged(event) {
    console.log(this.segmentModel);

    console.log(event);
  }
  openNew(str) {
    console.log(str)
    let navigationExtras: NavigationExtras = { state: { str: str } };
    this.router.navigate(['/portfolio/project-item', str], navigationExtras);
    localStorage.setItem("id", str);
  }
  openLinkedin() {
    window.open("https://www.linkedin.com/in/nicholas-soh-6b55ab171/")
  }
  openIg() {
    window.open("https://www.instagram.com/niicc.cc")
  }
  openFb() {
    window.open("https://www.facebook.com/nicsohdelin/")
  }
  openTwitter() {
    window.open("https://twitter.com/niicc_cc")
  }


}
