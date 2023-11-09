import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  aboutus: any
  constructor(private homeService: HomeService,private commonService:CommonService) { }
  ngOnInit(): void {

    this.homeService.getAboutUs().subscribe({
      next: (res) => {

        this.aboutus= res.data
       
       

      }, error: (err) => {
        console.log(err)
      }
    })

    

  }
  getImagePath(image:any){
    

    return this.commonService.createImagePath(image.data.attributes.url)
  }}

