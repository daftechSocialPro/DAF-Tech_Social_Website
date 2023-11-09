import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  works: any
  constructor(private homeService: HomeService,private commonService:CommonService) { }
  ngOnInit(): void {

    this.homeService.getWorks().subscribe({
      next: (res) => {

        this.works = res.data
      
       

      }, error: (err) => {
        console.log(err)
      }
    })

  }
  getImagePath(image:any){
    

    return this.commonService.createImagePath(image.data.attributes.url)
  }

}

  
