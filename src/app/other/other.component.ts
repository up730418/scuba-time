import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { TeamMember, QA } from '../course';

@Component({
  selector: 'other-comp',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css'],
})

 export class OtherComponent implements OnInit {

  templateToLoad: String;
  teamMembers: TeamMember[] = [];
  faq: QA[] = [];

  constructor( private route: ActivatedRoute,
              private location: Location,
              private titleService: Title, ) { }


  ngOnInit() {
    this.templateToLoad = this.route.params['_value'].id;
    let tit = (this.templateToLoad.toUpperCase()).replace(/-/g, ' ');
    window.scrollTo(0, 0);
    this.setTitle(`${tit} | Scuba Time Scuba Diving Courses in Essex, Herts, Cambridge`);
    if (this.templateToLoad === 'meet-the-team') {
      this.getTeamMembers();
    }
    if (this.templateToLoad === 'faq') {
      this.getFAQ();
    }
  }

  setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  getTeamMembers() {
     this.teamMembers = [{name: 'Paul', 
                          level: 'PADI Master Instructor & EFR Instructor Trainer',
                          diveSite: 'Blue Corner, Palau, for the Sharks & Rays in clear warm water',
                          course: 'Open Water, to see peoples excitement turn to pleasure as they take their first underwater breaths and begin to explore the underwater world for themselves.',
                          img: 'img/paul.jpg'},
                         
                         {name: 'Simon', 
                          level: 'PADI Instructor & EFR Instructor',
                          diveSite: 'Coron Bay, Philippines',
                          course: 'Open Water, watching people turning into divers and being part of their success.',
                          img: 'img/simon.jpg'},

                         {name: 'Billy', 
                          level: 'PADI Instructor & EFR Instructor', 
                          diveSite: 'Red Sea, Thislegorm to see my old friend the resident Turtle.',
                          course: 'Project aware courses, enthusing divers to care for the environment, sea life and protecting the planet.',
                          img: 'img/bill.jpg'},

                         {name: 'James', 
                          level: 'PADI Instructor & EFR Instructor', 
                          diveSite: 'Red Sea, Giannis D Wreck, 100m long cargo ship sunk in 1983, great engine room dive.',
                          course: 'Wreck Diving, teaching the safe way to enter & exit wrecks making the dives as enjoyable as possible.',
                          img: 'img/james.jpg'},
                         
                         {name: 'Tom', 
                          level: 'PADI Instructor', 
                          diveSite: 'Bali, Warm water with Turtles, Sharks and Octopus',
                          course: 'Peak Performance Boyancy, helping divers to get perfect weighting & trim to really enjoy their dives.',
                          img: 'img/tom.jpg'},
                         
                         {name: 'Robert', 
                          level: 'PADI Instructor', 
                          diveSite: 'Cenotes, Mexico for the breathtaking Caves.',
                          course: 'Peak Performance Buoyancy as it is the basis for all great diving, master that and you can dive anywhere',
                          img: 'img/robert.jpg'},
                         
                         {name: 'Paul', 
                          level: 'PADI Instructor', 
                          diveSite: 'Brothers Islands in the Red Sea for the Sharks.',
                          course: 'Peak Performance Buoyancy, once divers understand this it makes all diving easier',
                          img: 'img/paulJames.jpg'},
                         
                         {name: 'Louise', 
                          level: 'Divemaster', 
                          diveSite: 'Malta for  the clear  waters, Wrecks, Caves& sea life',
                          course: '',
                          img: 'img/louis.jpg'},
                         
                         {name: 'Jay', 
                          level: 'Divemaster', 
                          diveSite: 'Thistlegorm, Red sea for the history of the wreck',
                          course: '',
                          img: 'img/jay.JPG'},

                         {name: 'Nicola', 
                          level: 'Divemaster Trainee', 
                          diveSite: 'Bali, Warm water with Turtles, Sharks and Octopus.',
                          course: '',
                          img: 'img/nicola.jpg'},
                         
                         {name: 'Katie', 
                          level: 'Divemaster Trainee', 
                          diveSite: 'Great Barrier Reef Australia, simply amazing',
                          course: '',
                          img: 'img/katie.jpg'},
                         
                         {name: 'Matt', 
                          level: 'Divemaster Trainee', 
                          diveSite: 'Maldives for the Manta Rays',
                          course: '',
                          img: 'img/matt.jpg'},
                        
                        {name: 'Darren', 
                          level: 'Divemaster Trainee', 
                          diveSite: 'Thailand for the whale sharks',
                          course: '',
                          img: 'img/darren.JPG'},

                        {name: 'Matt', 
                          level: 'Divemaster Trainee', 
                          diveSite: 'Cenotes Mexico for the super clear water',
                          course: '',
                          img: 'img/MattClark.jpg'},
                         
                        {name: 'Gail', 
                          level: 'AOW Diver & Surface Cover',
                          diveSite: 'Thislegorm Wreck in the Red Sea, Great memories of doing my PADI deep diver course',
                          course: '',
                          img: 'img/gail.jpg'},
                         
                         {name: 'Lucia', 
                          level: 'AOW & Surface Cover', 
                          diveSite: 'Anywhere thats sunny!!',
                          course: '',
                          img: 'img/lucy.jpg'},

                        
                        ];
   }
   getFAQ() {
     this.faq = [{question: "Where should I learn to dive", 
                  answer: `Guildenburgh Water is an ex brick quary that has been closed since 1945. Divers first started using the site in the early 1960's.
                                        It features a vast amount of submerged vehicles that vary from a double decker bus to a jet plane. 
                                        Guildenburgh Water also contains a varied fish life that range from cray fish to a sturgeon.`},
                 {question: "How can I tell if a dive shop is reputable",
                 answer: `Guildenburgh Water is an ex brick quary that has been closed since 1945. Divers first started using the site in the early 1960's.
                                        It features a vast amount of submerged vehicles that vary from a double decker bus to a jet plane. 
                                        Guildenburgh Water also contains a varied fish life that range from cray fish to a sturgeon.`},
                 {question: "How can I improve my diving",
                 answer: `Guildenburgh Water is an ex brick quary that has been closed since 1945. Divers first started using the site in the early 1960's.
                                        It features a vast amount of submerged vehicles that vary from a double decker bus to a jet plane. 
                                        Guildenburgh Water also contains a varied fish life that range from cray fish to a sturgeon.`},
                 {question: "What is the best dive kit/gear for me",
                 answer: `Guildenburgh Water is an ex brick quary that has been closed since 1945. Divers first started using the site in the early 1960's.
                                        It features a vast amount of submerged vehicles that vary from a double decker bus to a jet plane. 
                                        Guildenburgh Water also contains a varied fish life that range from cray fish to a sturgeon.`},
                 {question: "What is the best dive kit/gear for holidays",
                 answer: `Guildenburgh Water is an ex brick quary that has been closed since 1945. Divers first started using the site in the early 1960's.
                                        It features a vast amount of submerged vehicles that vary from a double decker bus to a jet plane. 
                                        Guildenburgh Water also contains a varied fish life that range from cray fish to a sturgeon.`},
                 {question: "What is the best dive kit/gear for cold water",
                 answer: ""},
                 {question: "What is the best dive kit/gear for warm water",
                 answer: ""},
                 {question: "Should I buy second hand equipment",
                 answer: ""},
                 {question: "What is cylinder testing",
                 answer: ""},
                 {question: "What is kit/gear serviceing",
                 answer: ""},
                 {question: "How often should I have my regulator serviced",
                 answer: ""},
                 {question: "How often should I have my BCD serviced",
                 answer: ""},
                 {question: "Where are the best places to dive",
                 answer: ""},
                 {question: "Where are the best UK dive locations",
                 answer: ""},
                 {question: "Where are the best overseas dive locations",
                 answer: ""},
                 {question: "How do I become a certified diver",
                 answer: ""},
                 {question: "How much does learning to  scuba dive cost",
                 answer: ""},
                 {question: "How long does it take to learn to scuba dive",
                 answer: ""},
                 {question: "How long does a tank of air last",
                 answer: ""},
                 {question: "",
                 answer: ""},
                 {question: "",
                 answer: ""},
                 {question: "",
                 answer: ""},
                 {question: "",
                 answer: ""},
                 {question: "",
                 answer: ""},
                 {question: "",
                 answer: ""},
                 
                
                ]
   }
   toggleHidden(i:string) {

     const faqToToggle = document.getElementById('faqAnswer-' + i);

     if (faqToToggle.classList.contains('hidden')) {
        faqToToggle.classList.remove('hidden');
      } else {
        faqToToggle.classList.add('hidden');
     }
   }
 }
