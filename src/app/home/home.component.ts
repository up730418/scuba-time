import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-comp',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

 export class HomeComponent implements OnInit {

  constructor(private titleService: Title,
              private route: ActivatedRoute,
              private _router:Router
              ) { }

  ngOnInit(): void {
    this.setTitle(`Scuba Time provide PADI Scuba Diving Courses in Essex, Herts, Cambridge`);

    if(this._router.url.includes("#")){
      const anchor = this._router.url.split("#")[1];
      document.getElementById(anchor).scrollIntoView()
    }
    
  }

  setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
 }
