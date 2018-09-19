import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

import { Course, QA } from '../course';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'], 
})

 export class CourseComponent implements OnInit {
   courses: Course [];
   course : Course;//= this.getCourse();
   course2: Course;
   
   title = 'PADI Scuba Diving Courses in Essex, Herts, Cambridge';
   
   constructor( private route: ActivatedRoute,
                private location: Location,
                private courseService: CourseService,
                private titleService: Title,
                private meta: Meta,
                ) {this.course = this.getCourse();
                  //console.log(this.course)
                  } //this.getCourse();}

   ngOnInit(): void {
    
     //this.getCourse2();
     window.scrollTo(0, 0);
     
   }

  setTitle( newTitle: string, newDesc: string) {
    this.meta.updateTag({ name: 'description', content: newDesc });
    this.titleService.setTitle( newTitle );
  }

  getCourse(): Course {
        this.courseService.waitSpiner(true)
        this.route.params
          .switchMap((params: Params) => this.courseService.getCoursePHP(params['id']))
          .subscribe(course => {this.course = course;
                                let tit =  `PADI ${this.course.name} in Essex, Herts, Cambridge`;
                                let desc = this.course.header;
                                this.setTitle(tit, desc);
                                //console.log(course)
                                this.courseService.waitSpiner(false);
                                return course as Course;
                                
                               },
                    error => console.log);
                        return new Course('', '', '', '', 0, 0, [new QA('', '')] , [new QA('', '')], '', '' );

  }
  getCourse2(): void {
        this.route.params
          .switchMap((params: Params) => this.courseService.getCoursePHP(params['id']))
          .subscribe(course => {this.course = course;
                                  let tit =  `PADI ${this.course.name} in Essex, Herts, Cambridge`;
                                  let desc = this.course.header;
                                this.setTitle(tit, desc);
                                
                               },
                    error => console.log);

  }

 }
