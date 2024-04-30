import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent'
  @Input('appBetterHighlight') highlightColor: string = 'blue'

  // best way to access a property
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor

  constructor(private eleRef: ElementRef, private renderder: Renderer2) { }

  ngOnInit(): void {
    // this.renderder.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor = this.defaultColor
  }


  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderder.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor = this.highlightColor
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderder.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = this.defaultColor
  }
}
