import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    standalone: true,
    selector: '[appHoverBackground]'
})
export class HoverBackgroundDirective {
    @Input() hoverColor: string = 'lightblue';
    @Input() defaultColor: string = 'transparent';

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    @HostListener('mouseenter') onMouseEnter() {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.hoverColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.defaultColor);
    }
}