import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showLoginFormFlag = false;
  
  modalRef: BsModalRef | null = null; // Initialize as null

  constructor(private modalService: BsModalService, private router:Router) {}

  showLoginForm() {
    this.showLoginFormFlag = !this.showLoginFormFlag; 
  }

  openModal(template: any) {
    this.modalRef = this.modalService.show(template);
  }
  showClientComponent() {
    
    this.router.navigate(['client-dashboard']);
  }
 

}
