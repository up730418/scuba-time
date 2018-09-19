import { Component, Attribute, AfterViewInit, Input, Output, OnInit, OnChanges, EventEmitter, ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  inputs:['images']

})

 export class GalleryComponent implements AfterViewInit  {
  imagesArray; 
  currentSelected = 0;
  maxImg;
  gallImg;
  buttons;
  imgButton;
  interval;
  images: any;
  setupInterval;
  checked = false;

  constructor(@Attribute('images') images:string,
              private applicationRef: ApplicationRef){}
  @Output() valueChange = new EventEmitter(false);
  

  // When component is built get the image string and turn them into an array             
  ngOnInit(){
    if(this.images){
      this.imagesArray = this.images.split(",");
    }
  }
  // Once the html is rendered start the gallery
  ngAfterViewInit () {
    if(this.images){
      this.gallerySetup(); 

      if(this.imagesArray.length > 1){
//        this.galleryTimer();
      }
    }

  }

ngOnChanges(change){
  if(this.images){
    this.imagesArray = this.images.split(",");
    this.valueChange.emit(this.imagesArray);
    this.applicationRef.isStable.subscribe((s) => { // #1
      if (s && !this.checked) {
          this.setupInterval = setInterval(() => this.gallerySetup(), 500);
      }
    });
  }
}
  

  gallerySetup(){
    if(document.querySelectorAll("#galleryControls span").length === 0){
      

    } else{
      clearInterval(this.setupInterval);
      this.imgButton = document.querySelectorAll("#galleryControls span");
      this.gallImg =  document.getElementById('galleryImages').getElementsByTagName('img');
      this.buttons =  document.getElementById('galleryControls').getElementsByTagName('span');
      this.maxImg = this.buttons.length;
      this.imgButton[0].classList.add("selected")
      this.gallImg[0].classList.add("opaque")
      for(let i = 0; i < this.buttons.length; i++) {
        this.imgButton[i].addEventListener('click', () => this.galleryButtons(i));
      }
    }
    this.galleryTimer();
    
  }
   galleryNext(){
     
     this.buttons[this.currentSelected].classList.remove("selected");
     this.gallImg[this.currentSelected].classList.remove("opaque");
     
     if(this.currentSelected >= this.maxImg - 1){
       this.currentSelected = 0;
     } else {
       this.currentSelected++;
     }
     
     this.gallImg[this.currentSelected].classList.add("opaque")
     this.buttons[this.currentSelected].classList.add("selected");

  }

  galleryBack(){
     this.buttons[this.currentSelected].classList.remove("selected");
     this.gallImg[this.currentSelected].classList.remove("opaque");
     
     if(this.currentSelected <= 0){
       this.currentSelected = this.maxImg - 1;
     } else {
       this.currentSelected--;
     }
     this.gallImg[this.currentSelected].classList.add("opaque")
     this.buttons[this.currentSelected].classList.add("selected");

   }

  galleryButtons(i: number){
    
    this.buttons[this.currentSelected].classList.remove("selected");
    this.gallImg[this.currentSelected].classList.remove("opaque");
    
    this.currentSelected = i;
    
    this.gallImg[this.currentSelected].classList.add("opaque")
    this.buttons[this.currentSelected].classList.add("selected");
  }

  galleryTimer(){
    this.applicationRef.isStable.subscribe((s) => { // #1
      if (s && !this.checked) {
          this.checked  = true;
          this.interval = setInterval(() => this.galleryNext(), 4000);
      }
    });

  }

  galleryBackButton(){
    clearInterval(this.interval);
    this.galleryBack();
  }

  galleryNextButton(){
    clearInterval(this.interval);
    this.galleryNext();
  }
 }
