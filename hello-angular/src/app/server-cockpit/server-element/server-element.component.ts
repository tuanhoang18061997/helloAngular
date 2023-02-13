import { Component, Input, OnInit, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterViewInit, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit {

  @Input('propElementFromS-E') element: { type: string, name: string, content: string };
  @Input() nameChange: string;

  @ViewChild('heading', { static: true }) header: ElementRef

  // @ViewChild('contentParagraph', {static: true}) contentParagraph: ElementRef;
  @ContentChild('contentParagraph', {static: true}) contentParagraph: ElementRef;
  constructor() {
    console.log("constructor is called");
  }


  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("ngOnChanges is called", changes);

  }

  ngOnInit(): void {
    console.log('ngOnInit is called');
    console.log("this.header: ---> ", this.header.nativeElement.textContent);
    console.log("Text content of paragraph: ", this.contentParagraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('ngDoCheck is called');
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("ngAfterContentInit");

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.warn("AfterViewInit. Text Content: this.header: ---> ", this.header.nativeElement.textContent);
    console.log("Text content of paragraph: ", this.contentParagraph.nativeElement.textContent);
  }

}
