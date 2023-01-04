import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIconStyle]'
})
export class IconStyleDirective {

  @Input('appIconStyle') color!: string;
  // @Input('defaultColor') defaultColor!: string;
  @HostListener('click') click() {
    console.log("xxxxxx");

    this.changeWidth(this.color || 'black')
  }
  // @HostListener('mouseleave') mouseleave() {
  //   this.changeWidth('yellow')
  // }

  constructor(private el: ElementRef, private render: Renderer2) { }

  changeWidth(color: string) {
    for (let child of this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.childNodes) {
      console.log(" this.el.nativeElement.parentElement.childNodes", this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.childNodes);
      // console.log(" this.el.nativeElement.parentElement.childNodes", child.childElement.childElement.childElement.childElement.childNodes);

      console.log({ child });

      this.render.removeClass(child, 'imgStyle');
    }


    this.render.addClass(this.el.nativeElement, 'imgStyle')
    // this.render.setStyle(this.el.nativeElement, 'opacity', '1')

  }
}
