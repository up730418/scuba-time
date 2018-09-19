import 'rxjs/add/operator/switchMap';
import { Component, OnInit} from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';


import { Course, QA } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.css'],

})

 export class CourseEditorComponent implements OnInit {

  submitted = false;

  model: Course;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService, ) {
  }

  ngOnInit(): void {
    this.getCourse();
    window.scrollTo(0, 0);
  }

   getCourse() {
   // let courseToReturn: Course;
    this.route.params
        .switchMap((params: Params) => this.courseService.getCoursePHP(params['id']))
        .subscribe(course =>{
                      if (course == null) {
                        this.model = new Course('', '', '', '', 0, 0, [new QA('', '')], [new QA('', '')], '', '');
                      } else {

                        this.model = course;
                      }

                    },
                  error => console.log);
    // return courseToReturn;
   }

  get diagnostic() { return JSON.stringify(this.model); }

  addDetails() {
    this.model.details.push( new QA( '', '') );
  }

  removeDetails(index) {
    this.model.details.splice( index, 1 );
    console.log(index);
  }

  addBreakDown() {
    this.model.breakDown.push( new QA( '', '') );
  }

  removeBreakDown(index) {
    this.model.breakDown.splice(index, 1);
    console.log(index);
  }

  onSubmit() {
    this.courseService.updateCoursePHP(this.model.id, this.model);
    this.router.navigateByUrl('scubaDivingCourses');
  }

  deleteCourse(id) {
    this.courseService.deleteCourse(id, {});
    this.router.navigateByUrl('scubaDivingCourses');
  }

}
