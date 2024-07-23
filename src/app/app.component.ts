import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErrorComponent } from './Components/Routing/error/error.component';
import { StudentsComponent } from './Components/Routing/students/students.component';
import { StudentDetailsComponent } from './Components/Routing/student-details/student-details.component';
import { HeaderComponent } from './Components/header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ErrorComponent,StudentsComponent,StudentDetailsComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task1';
}
