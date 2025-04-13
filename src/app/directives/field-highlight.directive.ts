import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    standalone: true,
    selector: '[appFieldHighlight]'
})
export class FieldHighlightDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {}

    @HostListener('input') onInputChange() {
        this.updateFieldStyle();
    }

    @HostListener('change') onSelectChange() {
        this.updateFieldStyle();
    }

    private updateFieldStyle(): void {
        const value = this.el.nativeElement.value;
        const isSelect = this.el.nativeElement.tagName.toLowerCase() === 'select';
        const isDefaultSelect = isSelect && (value === '' || value === null);

        if (!isDefaultSelect && value.trim() !== '') {
            this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'green');
        } else {
            this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
        }
    }
}