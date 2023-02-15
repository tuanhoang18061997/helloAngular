import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() defaultHighlightColor: string = 'blue';
  constructor(private elRef: ElementRef , private renderer: Renderer2) { }

  // @HostBinding dùng để xử lý 1 property DOM nào đó
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  @HostBinding('style.color') color: string = 'black';

  ngOnInit(): void {
    this.backgroundColor = 'yellow'
    this.color = 'purple'
  }

  // @HostListerner dùng để xử lý 1 sự kiện DOM nào đó thông qua directive
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'pink');
    this.backgroundColor = this.defaultHighlightColor;
    // this.color = 'white';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = this.defaultColor;
    // this.color = 'black'
  }


}
