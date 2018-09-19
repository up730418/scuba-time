import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Location } from '@angular/common';

import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { LocationComponent } from './location/location.component';
import { LocationsComponent } from './locations/locations.component';
import { OtherComponent } from './other/other.component';
import { CourseEditorComponent } from './course-editor/course-editor.component';

const routes: Routes = [
  { path: '', redirectTo: '/learnToScubaDive', pathMatch: 'full'},
  { path: 'learnToScubaDive', component: HomeComponent },
  { path: 'scubaDivingCourses', component: CoursesComponent, data: {title: 'PADI Scuba Diving Courses in Essex, Herts, Cambridge'} },
  { path: 'scubaDivingCourses/:id', component: CourseComponent },
  { path: 'scubaDiving/:id', component: OtherComponent },
  { path: 'scubaDivingLocations', component: LocationsComponent },
  { path: 'scubaDivingLocations/:id', component: LocationComponent },
  { path: 'courseEditor/:id', component: CourseEditorComponent },
  { path: 'about', redirectTo: '/learnToScubaDive#about', pathMatch: 'full'},
  { path: 'contact', redirectTo: '/learnToScubaDive#contact', pathMatch: 'full'},
  { path: '**', redirectTo: '/learnToScubaDive', pathMatch: 'full' },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

 export class AppRoutingModule { 

 }
