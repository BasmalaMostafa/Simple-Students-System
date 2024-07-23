import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StudentsService } from '../../../Services/students.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StudentComponent } from '../../student/student.component';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterModule],
  providers:[StudentsService],
  templateUrl: './student-details.component.html',
  styles: ``
})
export class StudentDetailsComponent implements OnInit{
  student:any;
  studentId=0;
  studentsArray:any;
  delete:boolean=false;

  confirmDelete(){
    this.delete=confirm("Do you want to confirm deletion?");
    if(this.delete){
      this.deleteStudent();
    }
  }

constructor(id:ActivatedRoute,private studentService:StudentsService){
this.studentId=id.snapshot.params["id"];
}
  ngOnInit(): void {
    this.studentService.getStudentById(this.studentId).subscribe({
      next:(data)=>{
        this.student=data;
      },
      error:(err)=>{
        console.log(err);
        
      }
    });
  
  }

  deleteStudent(){
  this.studentService.deleteStudent(this.student.id);
  } 
}
