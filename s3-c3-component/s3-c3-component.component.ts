import { Component, OnInit, Input, Output,EventEmitter,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
  AfterViewInit,AfterViewChecked,OnDestroy,SimpleChanges
  } from '@angular/core';

@Component({
  selector: 'app-s3-c3-component',
  templateUrl: './s3-c3-component.component.html',
  styleUrls: ['./s3-c3-component.component.css']
})
export class S3C3ComponentComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() {
    console.log('Constructor called');
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
  name = "S3C3";
  @Input() myParent:string;
  @Output() parentInvoke:EventEmitter<string> = new EventEmitter();
  onClick()
  {
      this.parentInvoke.emit(this.name);
  }
  

}
