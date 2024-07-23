import { Routes } from '@angular/router';
import { StudentsComponent } from './Components/Routing/students/students.component';
import { StudentDetailsComponent } from './Components/Routing/student-details/student-details.component';
import { ErrorComponent } from './Components/Routing/error/error.component';
import { UpdateStudentComponent } from './Components/update-student/update-student.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';

export const routes: Routes = [
    {path:"",redirectTo:"students",pathMatch:"full"},
    {path:"students",component:StudentsComponent},
    {path: "students/add",component:AddStudentComponent},
    {path:"students/:id",component:StudentDetailsComponent},
    {path: "students/:id/update",component:UpdateStudentComponent},
    {path:"**",component:ErrorComponent},
];
