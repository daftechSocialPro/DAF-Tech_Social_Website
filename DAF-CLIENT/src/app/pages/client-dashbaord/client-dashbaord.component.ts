import { Component } from '@angular/core';
import { AuthGuard } from 'src/app/auth/auth.guatd';

@Component({
  selector: 'app-client-dashbaord',
  templateUrl: './client-dashbaord.component.html',
  styleUrls: ['./client-dashbaord.component.css']
})
export class ClientDashbaordComponent {
 
    isCollapsed: boolean = false;
    showProjectDetails = false;
  
    projects: any[] = [
      {
        name: 'Project 1',
        description: 'Description of Project 1',
        image: '',
      },
      {
        name: 'Project 2',
        description: 'Description of Project 2',
        image: 'path-to-project-image-2.jpg',
      },
      // Add more projects as needed
    ];

    constructor(private authGuard : AuthGuard){}
  
    searchProjects(event: Event) {
      const searchText = (event.target as HTMLInputElement).value;
      // Now, you can use searchText safely
      // Implement search logic here
    }
  
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    }
  

    project = {
      title: 'Sample Project',
      description: 'This is a sample project description.',
      imageSrc: 'project-image.jpg'
    };
  
    toggleProjectDetails() {
      this.showProjectDetails = !this.showProjectDetails;
    }
    logOut(){
      this.authGuard.logout()
    }
  }
  

