import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    standalone: true,
    name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {
    transform(value: string): string {
        return value.toUpperCase();
    }
}