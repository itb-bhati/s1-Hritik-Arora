
import { Component, OnInit, Input, Output,EventEmitter,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked,OnDestroy,SimpleChanges
} from '@angular/core';



@Component({
  selector: 'app-s1-c2-component',
  templateUrl: './s1-c2-component.component.html',
  styleUrls: ['./s1-c2-component.component.css']
})
export class S1C2ComponentComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked,OnDestroy {
  name:string = "S1C2";

  constructor()
  {
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

  @Input() myParent:string;
  @Output() parentInvoke:EventEmitter<string> = new EventEmitter();
  onClick()
  {
      this.parentInvoke.emit(this.name);
  }
  

}
