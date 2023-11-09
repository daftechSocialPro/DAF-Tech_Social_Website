import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  readonly BaseURI = environment.baseUrl2;

  login(formData: any) {
    return this.http.post<any>(this.BaseURI + '/api/Authentication/Login', formData);
  }
  
  roleMatch(allowedRoles: any): boolean {

    var isMatch = false;
    var token = sessionStorage.getItem('token')

    var payLoad = token? JSON.parse(window.atob(token!.split('.')[1])):"";

    var userRole: string[] =payLoad? payLoad.role.split(","):[];
    allowedRoles.forEach((element: any) => {
      if (userRole.includes(element)) {
        isMatch = true;
        return false;
      }
      else {
        return true;
      }
    });
    return isMatch;
  }
  getCurrentUser(){
    var payLoad = JSON.parse(window.atob(sessionStorage.getItem('token')!.split('.')[1]));

    let user : UserView={
      UserID : payLoad.userId,
      FullName: payLoad.fullName,
      role : payLoad.role.split(","),
      ClientId:payLoad.clientId,
      Photo : payLoad.photo
    }
    return user ; 
  }
  getUserRoles (){
    
    return this.http.get<any>(this.BaseURI+"/api/Authentication/GetRoleCategory")
    
  }
  
  changePassword(changePassword:any){
    return this.http.post<any>(this.BaseURI+"/api/Authentication/ChangePassword",changePassword)
  }


}
export interface UserView {
  FullName : string ; 
  role: string [];
  UserID : string ;
  ClientId:string;
  Photo:string;
}