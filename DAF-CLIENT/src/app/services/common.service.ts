import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }


  uploadUrl: string = environment.baseUrl;

  createImagePath(url: string) {
    return this.uploadUrl + url
  }
}
