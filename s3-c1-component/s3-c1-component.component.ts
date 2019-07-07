import { Component, OnInit, Input, Output,EventEmitter,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
  AfterViewInit,AfterViewChecked,OnDestroy,SimpleChanges
  } from '@angular/core';

@Component({
  selector: 'app-s3-c1-component',
  templateUrl: './s3-c1-component.component.html',
  styleUrls: ['./s3-c1-component.component.css']
})
export class S3C1ComponentComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
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
  childName = '';
  name:string = "S3C1";
  onParentInvoke(childName)
  {
    this.childName = childName;
  }

}
