
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: any
  constructor(private homeService: HomeService,private commonService:CommonService) { }
  ngOnInit(): void {

    this.homeService.getTeams().subscribe({
      next: (res) => {

        this.teams = res.data
       
       

      }, error: (err) => {
        console.log(err)
      }
    })

  }


  getImagePath(image:any){
    

    return this.commonService.createImagePath(image.data.attributes.url)
  }

}
