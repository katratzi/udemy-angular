import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

    // use the private shortcut which automatically
    // gives us a property
    constructor(private elementRef: ElementRef) {

    }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green'
    }
}