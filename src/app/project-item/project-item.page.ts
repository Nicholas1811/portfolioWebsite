import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.page.html',
  styleUrls: ['./project-item.page.scss'],
})

export class ProjectItemPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
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
    loop:true
  };
  data;
  slides;

  constructor(private route: ActivatedRoute, private router: Router) {

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = params.special;
        console.log(this.data)
        this.hrefvar = "javascript:window.location.reload(true)"
        this.projectArray = [
          {
            id: "OpenHouse",
            name: "TPOH2021",
            des: "The TPOH2021 mobile application is an app made for prospective students who have interest in enrolling into Temasek Polytechnic for further education. Users can use this platform as a guide for them to know more about the courses, CCAs, in the school. In addition, my team has also built a game using Google Map's API within the application as well. As of 04/03/2021, the app has gathered 925 downloads.",
            type: "Mobile Application",
            technologiesUsed: "<ul><li>HTML</li><li>SCSS</li><li>Typescript</li><li>Cordova</li><li>Ionic Framework</li><li>Realtime Database</li></ul>",
            achievedGrade: "For this project, grading is not applicable as it is a project belonging to Temasek Polytechnic.",
            image: ["../../assets/OHSS.png",
              "../../assets/OHSS1.png",
              "../../assets/OHSS2.png",
              "../../assets/OHSS3.png",
              "../../assets/OHSS4.png"
            ]
          },
          {
            id: "ieatifindimake",
            name: "ieatifindimake",
            des: "ieatifindimake is a mobile application made to solve the problem of the current Covid-19 situation. This app can serve as a solution to preparing meals during the pandemic as users can view recipes and interact with reviews. In addition, users can also purchase their groceries, making it a one-stop solution for their needs. Social Sharing functionalities are also incoporated into the mobile application as well.",
            type: "Mobile Application",
            technologiesUsed: "<ul><li>HTML</li><li>SCSS</li><li>Typescript</li><li>Cordova</li><li>Ionic Framework</li><li>Cloud Firestore</li></ul>",
            achievedGrade: "I have achieved an A Grade.",
            image: ["../../assets/ieatifindimake1.png",
              "../../assets/ieatifindimake2.png",
              "../../assets/ieatifindimake3.png",
              "../../assets/ieatifindimake4.png",
              "../../assets/ieatifindimake5.png"
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
          if (this.projectArray[i].id == this.data) {
            this.projectObject = this.projectArray[i]
          }
        }
        for (let a = 0 ; a < this.projectArray.length; a++){
          if(this.projectArray[a].id == this.data){
            const index = this.projectArray.indexOf(this.projectArray[a]);
            this.projectArray.splice(index, 1)
          }
        }

        console.log(this.projectArray)
      }
    });

  }
  id: any;
  ngOnInit() { }

  segmentChanged(event) {
    console.log(event);
  }
  openNew(str) {
    let navigationExtras: NavigationExtras = { 
      queryParams: { 
        special: str
      } 
    };
    this.router.navigate(['portfolio/project-item'], navigationExtras);
    this.segmentModel = "brief";
    this.content.scrollToTop(1500);
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
  openThis(str){
    let navigationExtras: NavigationExtras = { 
      queryParams: { 
        special: str
      } 
    };
    this.router.navigate(['portfolio/project-item'], navigationExtras);

 
  }
}
