import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  projectArray;
  constructor() {
    this.projectArray = [
    {
      id: "OpenHouse",
      name : "TPOH2021",
      des: "TPOH2021 is GAY"
    },
    {
      id: "OpenHouse",
      name : "ieatifindimake",
      des: "ieatifindigay"
    }
  ]
   }
   projects(str){
     for (let obj of this.projectArray){
      if(obj.id = str){
        return obj
      }
      return obj
     }

   }
}
