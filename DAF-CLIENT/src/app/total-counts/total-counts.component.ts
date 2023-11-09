import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { HomeService } from 'src/app/services/home.service';

import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-total-counts',
  templateUrl: './total-counts.component.html',
  styleUrls: ['./total-counts.component.css']
})
export class TotalCountsComponent implements AfterViewInit {
  @ViewChild('countElement', { static: false }) countElement!: ElementRef;
  ngAfterViewInit() {
   
  }

  totalcounts: any
  constructor(private homeService: HomeService,private commonService:CommonService) { }
  ngOnInit(): void {

    this.homeService.getTotalCounts().subscribe({
      next: (res) => {

        this.totalcounts = res.data
       

      }, error: (err) => {
        console.log(err)
      }
    })

  }

 

}
