import { Injectable } from '@angular/core';
import { student } from './student.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class studentservice {

  formData  : student;
  list : student[];
  readonly rootURL ="http://localhost:7741/api"

  constructor(private http : HttpClient) { }

  poststudent(formData : student){
   return this.http.post(this.rootURL+'/student',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'/student')
    .toPromise().then(res => this.list = res as student[]);
  }

  putstudent(formData : student){
    return this.http.put(this.rootURL+'/student/'+formData.studentID,formData);
     
   }

   deletestudent(id : number){
    return this.http.delete(this.rootURL+'/student/'+id);
   }
}
