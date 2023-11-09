import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  valCheck: string[] = ['remember'];
  
  username!: string;
  
  password!: string;
  
  
  
  constructor( private router: Router, private userService: UserService,
    
    private messageService: MessageService) { }
    
    ngOnInit(): void {
      
      
    }
    
    login() {
      
      if (this.username&& this.password){
        
        
        this.userService.login({
          UserName : this.username,
          Password:this.password
        }).subscribe({
          next: (res) => {
            
            if (res.success) {
              this.messageService.add({ severity: 'success', summary: 'Successfull', detail: res.message });
              
              sessionStorage.setItem('token', res.data);
              
              this.goToDashboard()
            }
            else {
              
              this.messageService.add({ severity: 'error', summary: 'Authentication failed.', detail: res.message });
              
            }
            
          },
          error: (err) => {
            
            console.log(err)
            
          }
        })
        
      }
      else{
        this.messageService.add({ severity: 'error', summary: 'Authentication failed.', detail: "Username and password required" });
        
      }
    }
    
    goToDashboard() {
      // Redirect to the client dashboard page
      this.router.navigate(['/client-dashboard']);
    }
    
  }