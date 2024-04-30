import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private eleRef: ElementRef, private renderder: Renderer2) { }

  ngOnInit(): void {
    this.renderder.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
  }
}
