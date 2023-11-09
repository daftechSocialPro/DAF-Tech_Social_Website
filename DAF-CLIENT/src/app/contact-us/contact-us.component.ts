import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../services/home.service';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {


  commentForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder, 
    private homeService: HomeService,
    private messageService:MessageService
  ) {

    this.commentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      detail: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {

    if (this.commentForm.valid) {

      console.log(this.commentForm.value)

      var commentPost: any = {
        data : {
          'Name': this.commentForm.value.name,
          'Email': this.commentForm.value.email,
          'Phone': this.commentForm.value.phone,
          'Comment': this.commentForm.value.detail
        }
      }

      console.log(commentPost)

      this.homeService.createComment(commentPost).subscribe({
        next: (res) => {
          Swal.fire('Success', 'Thank You Your Message Successfully Sent', 'success');   
        }, error: (err) => {
          Swal.fire('Error', 'This Email is Incorrect!', 'error');
        }
      })
    
    }else {
      this.messageService.add({ severity: 'error', summary: 'Validation Error', detail: 'Please fill the required fileds' });
    }
  }
}