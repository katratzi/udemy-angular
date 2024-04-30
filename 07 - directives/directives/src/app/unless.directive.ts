import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // setter of the property
  // this name needs to be the same as the selector
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // show the given template
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // remove everything from this place in the dom
      this.vcRef.clear()
    }
  }

  //  get the what and where
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

  }

}
