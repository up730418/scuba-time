import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { DiveLocation } from '../course';

@Component({
  selector: 'app-location-comp',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})

 export class LocationComponent implements OnInit {

  templateToLoad: String;
  location: DiveLocation;
  locations: DiveLocation[];

  constructor( private route: ActivatedRoute,
//              private location: Location,
              private titleService: Title, ) { }


  ngOnInit() {
    this.templateToLoad = this.route.params['_value'].id;
    const tit = (this.templateToLoad.toUpperCase()).replace(/-/g, ' ');
    window.scrollTo(0, 0);
    this.setTitle( tit + ' | The Best Scuba Diving Locations');
    this.getLocation();
  }

  setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  getLocation() {
    this.locations = [{title: 'Guildenburgh-Water', name: 'Guildenburgh Water',
                          shortDescription: 'A brick quary set in the heart of peterbourough',
                          description: `Guildenburgh Water is an ex brick quary that has been closed since 1945. Divers first started using the site in the early 1960's.
                                        It features a vast amount of submerged vehicles that vary from a double decker bus to a jet plane. 
                                        Guildenburgh Water also contains a varied fish life that range from cray fish to a sturgeon.`,
                          details: {'maxDepth' : '22 Meters',
                                    'facilites' : ['Changing room', 'Toilets', 'Dive Shop', 'Air station' ],
                                    'pointsofIntrest': ['Double decker bus', 'Coach', 'Jet plane', 'Sky van', 'Yacht', 'Plethera of cars', 'Training platforms', 'Underwater Forest'], 
                                   },
                          address: 'Eastrea Rd, Whittlesey, Peterborough PE7 2AR',
                          img: './img/Guildenburgh_Water_Scuba-Time.JPG',
                          gallery: './assets/img/Guildenburgh_Water_Scuba-Time.JPG,./assets/img/Guildenburgh_Rescue_Scuba_Time.JPG,./assets/img/Guildenburgh_Scuba_Time_Instructors.JPG',
                          map: 'http://www.gildenburgh.com/wp-content/uploads/2012/01/A3-Bordered-Plan-28-07-08.jpg',
                          mapEmbed: 'guildeburgh+water'},
                      
                      {title: 'Stoney-Cove', name: 'Stoney Cove',
                          shortDescription: 'A brick quary set in the heart of peterbourough',
                          description: `Guildenburgh Water is an ex brick quary that has been closed since 1945. Divers first started using the site in the early 1960's.
                                        It features a vast amount of submerged vehicles that vary from a double decker bus to a jet plane. 
                                        Guildenburgh Water also contains a varied fish life that range from cray fish to a sturgeon.`,
                          details: {'maxDepth' : '22 Meters',
                                    'facilites' : ['Changing room', 'Toilets', 'Dive Shop', 'Air station' ],
                                    'pointsofIntrest': ['Double decker bus', 'Coach', 'Jet plane', 'Sky van', 'Yacht', 'Plethera of cars', 'Training platforms', 'Underwater Forest'], 
                                   },
                          address: 'Eastrea Rd, Whittlesey, Peterborough PE7 2AR',
                          img: './assets/img/simon.jpg',
                          gallery: './assets/img/simon.jpg,./assets/img/paul.jpg',
                          map: 'http://www.gildenburgh.com/wp-content/uploads/2012/01/A3-Bordered-Plan-28-07-08.jpg',
                          mapEmbed: 'guildeburgh+water'}];
    
     this.location = this.locations.find((loc) => {return loc.title == this.templateToLoad })
   }
   
   
   
 }
