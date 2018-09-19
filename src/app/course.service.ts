import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Headers,  Http, Response, RequestOptions, Request, RequestMethod} from '@angular/http';
import { Title } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';

import { Course, QA, EmailModel } from './course';

@Injectable()

export class CourseService {

  private courseUrl = 'http://localhost:8080/testDb';
  private dbUrl = 'mongodb://localhost:27017/data';

  options = new RequestOptions({
    headers: new Headers({'Content-Type': 'application/json' }),

  });


  constructor(private http: Http) { }

  getCourse(id: string): Promise<Course> {
    const url = `${this.courseUrl}/${id}`;
    return this.http.get(url)
                .toPromise()
                .then(response => response.json().data as Course)
                .catch(this.handleError);
  }

  getCoursePHP(id: string): Promise<Course> {
    const url = './assets/php/server.php?data=' + id + '&type=getCourse';
    return this.http.get(url)
                .toPromise()
                .then(response => {
                  if (response['_body'] !== '[]') {
                    let data = JSON.parse(decodeURI(response['_body']));
                    data = atob(data[0].data);
                    data =  decodeURI(data);
                    data = data.replace(/[\r\n]/g, ' \\n ');

                    return JSON.parse(data) as Course;
                  } else {

                    return new Course('', '', '', '', 0, 0, [new QA('', '')] , [new QA('', '')], '', '' );
                  }
    })
                .catch(this.handleError);
  }
  
  

  getCourses(): Promise<Course[]> {
    const url = this.courseUrl;
    return this.http.get(url)
                .toPromise()
                .then(response => response.json().data as Course[])
                .catch(this.handleError);
  }


  getCoursesPHP(): Promise<Course[]> {
    const url = './assets/php/server.php?data=&type=getCourses';
    return this.http.get(url)
                .toPromise()
                .then(response => {
                    const courses = [];
                    const data = JSON.parse(response['_body']);

                    for (const ob of data ) {
                      const decodeBase = atob(ob.data);
                      const decodeU = decodeURI(decodeBase);

                      const formatedData = decodeU.replace(/[\r\n]/g, ' \\n ');
                      courses.push(JSON.parse(formatedData));
                    }
                    courses.sort((a,b) => {return a.pageOrder - b.pageOrder});
                   // this.waitSpiner(false);
                    return courses as Course[];

                  })
                .catch(this.handleError);
  }

  updateCourse(id: string, data): Promise<Course> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    const url = `${this.courseUrl}/update/${id}`;
    return this.http.post(url, data, options)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
  }

  updateCoursePHP(id: string, data): Promise<Course> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    const url = './assets/php/server.php';

    data = 'data=' + btoa(encodeURI(JSON.stringify(data))) + '&id=' + id + '&type=updateCourse' ;
    return this.http.post(url, data, options)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
  }

  deleteCourse(id: string, data): Promise<Course> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    const url = `${this.courseUrl}/delete/${id}`;
    return this.http.post(url, data, options)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
  }

  deleteCoursePHP(id: string, data): Promise<Course> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    const url = './assets/php/server.php';
    data = 'data=' + btoa(encodeURI(JSON.stringify(data))) + '&id=' + id + '&type=deleteCourse';
    return this.http.post(url, data, options)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
  }

  sendEmail(data): Promise<EmailModel> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    data = `email=${data.email}&name=${data.name}&contactNo=${data.contactNo}&intrest=${data.intrest}&extraDetails=${data.extraDetails}`
    const url = './assets/php/email.php';
    return this.http.post(url, data, options)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);

  }
  
 waitSpiner(on: boolean) {
    if(on === true){
      document.getElementById("loader").style.display ="block";
    }
    else{
      document.getElementById("loader").style.display = "none";
      
    }
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || { };
  }
  private handleError(error: any): Promise<any> {
    console.error('An error has occured', error);
    return Promise.reject(error.message || error);
  }
}
