import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  baseUrl: string = environment.baseUrl;

  getClients() {
    return this.http.get<any>(this.baseUrl + "/api/clients?populate=*")
  }

  getBlogs() {
    return this.http.get<any>(this.baseUrl + "/api/blogs?populate=*")
  }
  getSingleBlog(id:string){
    return this.http.get<any>(this.baseUrl+`/api/blogs/${id}?populate=*`)
  }
  
  getTeams(){
    return this.http.get<any>(this.baseUrl + "/api/teams?populate=*")
  }

  getProjects(){
    return this.http.get<any>(this.baseUrl+ "/api/projects?populate=*")
  }
  getTotalCounts (){
    return this.http.get<any>(this.baseUrl + "/api/total-counts?populate=*")
  }
  getServices (){
    return this.http.get<any>(this.baseUrl+ "/api/Services?populate=*")
  }
  getQuestions(){
    return this.http.get<any> (this.baseUrl + "/api/questions?populate=*")
  }

  getAboutUs() {
    return 	this.http.get<any>(this.baseUrl + "/api/about-uses?populate=*")
  }

  getWorks(){
    return   this.http.get<any>(this.baseUrl+ "/api/works?populate=*" )
  }

  createComment (commentPost:any){

    return this.http.post<any>(this.baseUrl+"/api/comments",commentPost)
  }
}