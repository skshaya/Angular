import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { studentsComponent } from './students/students.component';
import { studentComponent } from './students/student/student.component';
import { studentListComponent } from './students/student-list/student-list.component';
import { studentservice } from './shared/student.service';

@NgModule({
  declarations: [
    AppComponent,
    studentsComponent,
    studentComponent,
    studentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [studentservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
