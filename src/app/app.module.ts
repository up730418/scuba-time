import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { LocationsComponent } from './locations/locations.component';
import { OtherComponent } from './other/other.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CourseEditorComponent } from './course-editor/course-editor.component';

import { CourseService } from './course.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({

  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    HomeComponent,
    CourseEditorComponent,
    LocationComponent,
    LocationsComponent,
    OtherComponent,
    GalleryComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),

  ],
  providers: [
    CourseService,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {

}
