import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonService } from 'src/app/services/common.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoWidth: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }

  projects: any
  constructor(private homeService: HomeService,private commonService:CommonService) { }
  ngOnInit(): void {

    this.homeService.getProjects().subscribe({
      next: (res) => {

        this.projects = res.data
  

      }, error: (err) => {
        console.log(err)
      }
    })

  }


  getImagePath(image:any){
    

    return this.commonService.createImagePath(image.data.attributes.url)
  }
  customOptionms: OwlOptions = {
    autoplay: true,
    autoplayTimeout: 2000,
    loop: true, // Set the autoplay timeout to 3 seconds (3000 milliseconds)
    // Other Owl Carousel options
  };

}