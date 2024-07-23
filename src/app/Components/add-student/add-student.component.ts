import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../Services/students.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,CommonModule,RouterModule],
  providers:[StudentsService],
  templateUrl: './add-student.component.html',
  styles: ``
})
export class AddStudentComponent implements OnInit{
  students:any;


  constructor(private studentService:StudentsService){
    
    }
  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe({
      next:(data)=>{
        this.students=data;
        //console.log(this.students.length);
        
      },
      error:(error)=>{
        console.log(error);
        
      },
      complete:()=>{
        console.log("Completed");
        
      }
    });
  }

   

  form= new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(3)]),
    age: new FormControl(null,[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    });
    

    get nameValidation(){
      return this.form.controls["name"].valid;
    }
    
    get ageValidation(){
      return this.form.controls["age"].valid;
    }

    get emailValidation(){
      return this.form.controls["email"].valid;
    }
    
    add(){
    let id = +(this.students[this.students.length-1]).id+1;
    
    this.studentService.addStudent(
      {
      "id":id.toString() ,
      "name": (this.form.controls["name"].value),
      "age": (this.form.controls["age"].value),
      "email": (this.form.controls["email"].value)
    },);

      // console.log(this.form.controls["name"].value);
      // console.log(this.form.controls["age"].value);
      // console.log(this.form.controls["email"].value);
   }
}
