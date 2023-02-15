import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggleOpen() {
    const dropdown = this.eleRef.nativeElement.querySelector('.dropdown-menu');
    // const dropdown = this.eleRef.nativeElement.querySelector('.dropdown-menu');"
    console.log(dropdown);
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(this.eleRef.nativeElement.querySelector('.dropdown-menu'), 'show');
    } else {
      this.renderer.removeClass(this.eleRef.nativeElement.querySelector('.dropdown-menu'), 'show')
    }
  }
  @HostListener('document:click', ['$event']) documentClick(event: Event) {
    if (this.eleRef.nativeElement.contains(event.target)) {
      if (this.isOpen) {
        this.renderer.addClass(this.eleRef.nativeElement.querySelector('.dropdown-menu'), 'show');
      } else {
        this.renderer.removeClass(this.eleRef.nativeElement.querySelector('.dropdown-menu'), 'show')
      }
    } else {
      this.isOpen = false;
      this.renderer.removeClass(this.eleRef.nativeElement.querySelector('.dropdown-menu'), 'show')
    }
  }
}
