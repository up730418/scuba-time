import { Component, OnInit } from '@angular/core';
import { Title, Meta, SafeScript } from '@angular/platform-browser';

import { Course, QA } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})

 export class CoursesComponent implements OnInit {
   courses: Course[];
//   products: string =       `{
//                      "@context": "http://schema.org",
//                      "@type": "product",
//                      "url": "https://scuba-time.co.uk/scubaDivingCourses/id",
//                      "name": "name",
//                      "image": "http://scuba-time.co.uk/img",
//                      "description": "header",
//                      "price": "price"
//                    }`

   constructor(private courseService: CourseService,
               private titleService: Title,
               private meta: Meta, ) { this.getCourses();}

   ngOnInit(): void {
     
     this.titleService.setTitle(`PADI Scuba Diving Courses in Essex, Herts, Cambridge`);
     this.meta.updateTag({name: 'desription', 
                          content:`Take a look at the range of PADI scuba diving courses offred 
                                    by Scuba Time. All course are taught to the highest standard 
                                    and available throughout the Essex, Hertfordshire and 
                                    Cambridge region.`});
     window.scrollTo(0,0);
   }

   getCourses(): void{
    this.courseService.waitSpiner(true);
    this.courseService.getCoursesPHP().then(courses => { 
      this.courses = courses
      this.courseService.waitSpiner(false);
      //return courses as Course[]
    })
   
   }
 }
