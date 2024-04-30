import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // best way to access a property
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'

  constructor(private eleRef: ElementRef, private renderder: Renderer2) { }

  ngOnInit(): void {
    // this.renderder.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
  }


  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderder.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor = 'blue'
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderder.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = 'transparent'
  }
}
