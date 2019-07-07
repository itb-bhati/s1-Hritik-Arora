import { Component, OnInit, Input,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy, 
SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-s1-c1-component',
  templateUrl: './s1-c1-component.component.html',
  styleUrls: ['./s1-c1-component.component.css']
})

export class S1C1ComponentComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,
AfterViewChecked,
OnDestroy {

  

  constructor() { 
    console.log('constructor called');
  }
  ngOnChanges(changes:SimpleChanges)
  {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }
  ngDoCheck()
  {
    console.log('ngDoCheck called');
  }
  ngAfterContentInit()
  {
    console.log('ngAfterContentChecked called');
  }
  ngAfterContentChecked()
  {
    console.log('ngOnAfterContentChecked called');
  }
  ngAfterViewInit()
  {
    console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked()
  {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy()
  {
    console.log('ngOnDestroy called');
  }
  childName = '';
  name:string = "S1C1";
  onParentInvoke(childName:string)
  {
      this.childName = childName;
  }
   

}
