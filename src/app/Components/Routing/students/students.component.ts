import { Component } from '@angular/core';
import { StudentComponent } from '../../student/student.component';
import { StudentsService } from '../../../Services/students.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [StudentComponent,HttpClientModule,CommonModule,RouterModule],
  providers:[StudentsService],
  templateUrl: './students.component.html',
  styles: ``
})
export class StudentsComponent {
  students:any;

  constructor(private studentService:StudentsService){}

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
}
