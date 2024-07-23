import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StudentsService } from '../../Services/students.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule,RouterModule],
  providers:[StudentsService],
  templateUrl: './update-student.component.html',
  styles: ``
})
export class UpdateStudentComponent implements OnInit{
  student:any;
  studentId=0;
  studentName:any;
  studentAge:any;
  studentEmail:any;


  constructor(id:ActivatedRoute,private studentService:StudentsService){
    this.studentId=id.snapshot.params["id"];
    }

   

  form= new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(3)]),
    age: new FormControl(null,[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    });
    

    ngOnInit(): void {
      this.studentService.getStudentById(this.studentId).subscribe({
        next:(data)=>{
          this.student=data;
          this.studentName=this.student.name;
          this.studentAge=this.student.age;
          this.studentEmail=this.student.email;
        },
        error:(err)=>{
          console.log(err);
          
        },
        complete:()=>{
          console.log("Completed");
          
        }
      });
    
    }

    get nameValidation(){
      return this.form.controls["name"].valid;
    }

    get ageValidation(){
      return this.form.controls["age"].valid;
    }
    
    get emailValidation(){
      return this.form.controls["email"].valid;
    }
    
    update(){
    this.studentService.updateStudent(
      this.studentId,
      {
      "id":this.studentId ,
      "name": (this.form.controls["name"].value)!=""?this.form.controls["name"].value:this.studentName,
      "age": (this.form.controls["age"].value)!=null?this.form.controls["age"].value:this.studentAge,
      "email": (this.form.controls["email"].value)!=""?this.form.controls["email"].value:this.studentEmail
    },);

      // console.log(this.form.controls["name"].value);
      // console.log(this.form.controls["age"].value);
      // console.log(this.form.controls["email"].value);
   }
}
