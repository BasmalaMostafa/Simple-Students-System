import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient:HttpClient) {}

  private url="http://localhost:3000/students";

  getAllStudents(){
    return this.httpClient.get(this.url);
  }

  getStudentById(studentId:number){
    return this.httpClient.get(this.url+"/"+studentId);
  }

  deleteStudent(studentId:number){
    console.log(this.url+"/"+studentId);
    
    this.httpClient.delete(this.url+"/"+studentId).subscribe({
      next: (data)=>{

      },
      error:(err)=>{
        console.log(err);
        
      }
    });
  }

  updateStudent(studentId:number,json:any){
   this.httpClient.put(this.url+"/"+studentId,json).subscribe({
    next: (data)=>{
      console.log(data);
      
    },
    error:(err)=>{
      console.log(err);
      
    }
   });
  }

  addStudent(student:any){
    this.httpClient.post(this.url,student).subscribe({
      next:(data)=>{
        console.log(data);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}
