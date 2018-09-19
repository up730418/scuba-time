import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from './course.service';
import { EmailModel } from './course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: []
})



export class AppComponent implements OnInit{
  
  constructor( private courseService: CourseService, ) { }
  
  emailModel: EmailModel;
  
  
  ngOnInit(): void {
    this.emailModel = new EmailModel('', '', '', '', '');
   // MetadataService.setMetaTags({ description: "yeah"});
  }

  hamMenu(): void {
    const menu = document.getElementById('pages');
    if ( menu.style.display === 'none' || menu.style.display === '' ) {
      menu.style.display = 'block';

    }else {
      menu.style.display = 'none';
    }
  }
  
  submitEmail(){
    this.courseService.sendEmail(this.emailModel);
    alert("Thank you for emailing Scuba Time we will be in contact shortly");
    this.emailModel = new EmailModel('', '', '', '', '');
    
  }
  
  goToContact(): void{
    window.scrollTo(0, document.body.scrollHeight);
    this.hamMenu();
  }
  goToAbout(anchor: string): void{
    const aboutDiv = document.getElementById(anchor)
    if(aboutDiv){
      aboutDiv.scrollIntoView();
    }
    
    this.hamMenu();
  }

}
