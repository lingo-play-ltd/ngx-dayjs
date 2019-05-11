import { PipeTransform } from '@angular/core';
export declare class DifferencePipe implements PipeTransform {
    transform(value: any, otherValue: any, unit?: any, precision?: boolean): number;
}
