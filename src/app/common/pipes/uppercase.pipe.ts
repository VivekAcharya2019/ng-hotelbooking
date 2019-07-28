import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name: 'upper'
})
export class UpperCase implements PipeTransform {
    transform(value: string) {
        if(value)
        return value.toUpperCase();
    }
}