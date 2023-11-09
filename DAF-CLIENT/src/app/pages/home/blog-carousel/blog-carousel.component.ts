import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-blog-carousel',
  templateUrl: './blog-carousel.component.html',
  styleUrls: ['./blog-carousel.component.css']
})
export class BlogCarouselComponent implements OnInit {

  blogs : any 
  constructor(
    private homeService : HomeService,
    private commonService : CommonService,
    private router : Router
    ){}
  ngOnInit(): void {

    this.getBlogs()
    
  }

  getBlogs (){

    this.homeService.getBlogs().subscribe({
      next:(res)=>{

        
        this.blogs = res.data
        
      },error:(err)=>{
        console.log(err)
      }
    })
  }

  getImagePath(image:any){
    

   
    return this.commonService.createImagePath(image.data.attributes.url)
  }

  goToDetail(id:string){

    this.router.navigate(['blog',id])

  }

}
