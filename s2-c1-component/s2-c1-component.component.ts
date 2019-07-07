import { Component, OnInit, Input, Output,EventEmitter,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
  AfterViewInit,AfterViewChecked,OnDestroy,SimpleChanges
  } from '@angular/core';

@Component({
  selector: 'app-s2-c1-component',
  templateUrl: './s2-c1-component.component.html',
  styleUrls: ['./s2-c1-component.component.css']
})
export class S2C1ComponentComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() {
    console.log('Constructor called')
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

  name:string = "S2C1";
}
