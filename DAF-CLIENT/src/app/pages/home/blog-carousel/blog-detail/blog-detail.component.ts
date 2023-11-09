import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { HomeService } from 'src/app/services/home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: any;
  blogs : any ;
  filteredBlogs:any;
  blogId!: string;
  recentPostTitles: string[] = []; // Array to store recent post titles

  constructor(
    private homeService: HomeService,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.blogId = this.route.snapshot.paramMap.get('id')!;
    this.getSingleBlog(this.blogId);
    this.getBlogs()
    this.loadRecentPostTitles(); // Load recent post titles here
  }

  getSingleBlog(id: string) {
    this.homeService.getSingleBlog(id).subscribe({
      next: (res) => {
        this.blog = res.data;
        console.log("Blog Data", this.blog);
      },
      error: (err) => {
        console.error("Error fetching blog data", err);
      }
    });
  }

  getBlogs (){

    this.homeService.getBlogs().subscribe(
      {
        next: (res) => {
          this.blogs = res.data;
          this.filteredBlogs=res.data
        
        },
        error: (err) => {
          console.error("Error fetching blog data", err);
        }
        
      }
    )
  }
  goToDetail(item:any){

    this.router.navigate(['blog',item.id])
    this.blog= item

  }
  
  getImagePath(image: any) {
    return this.commonService.createImagePath(image.data.attributes.url);
  }

  filterList(value:any){

    let search = value.value;
    this.filteredBlogs = this.blogs.filter((item: any) =>
     item.attributes.Title.toLowerCase().includes(search.toLowerCase())||
     item.attributes.Description.toLowerCase().includes(search.toLowerCase())
     
     
     );

  }


  loadRecentPostTitles() {
    this.recentPostTitles = ['NEW', 'SOMETHING', 'ICT SOLUTION']; 
  }
  splitDescription(description: string) {
    const paragraphs = description.split(/\n\s*\n/);
    return paragraphs.map(paragraph => paragraph.trim());
  }
  // Component code
  getFormattedDescription(description: string) {
    return this.splitDescription(description);
  }
}
