/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import * as dayjs_ from 'dayjs';
/** @type {?} */
const dayjs = dayjs_;
export class DateFormatPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        if (!value) {
            return '';
        }
        return dayjs(value).format(args[0]);
    }
}
DateFormatPipe.decorators = [
    { type: Pipe, args: [{ name: 'amDateFormat' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mb3JtYXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kYXlqcy8iLCJzb3VyY2VzIjpbImRhdGUtZm9ybWF0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sS0FBSyxNQUFNLE1BQU0sT0FBTyxDQUFDOztNQUMxQixLQUFLLEdBQUcsTUFBTTtBQUdwQixNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBQ3pCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsR0FBRyxJQUFXO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFBRSxPQUFPLEVBQUUsQ0FBQztTQUFFO1FBQzFCLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUFMRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGRheWpzXyBmcm9tICdkYXlqcyc7XG5jb25zdCBkYXlqcyA9IGRheWpzXztcblxuQFBpcGUoeyBuYW1lOiAnYW1EYXRlRm9ybWF0JyB9KVxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IHN0cmluZyB7XG4gICAgaWYgKCF2YWx1ZSkgeyByZXR1cm4gJyc7IH1cbiAgICByZXR1cm4gZGF5anModmFsdWUpLmZvcm1hdChhcmdzWzBdKTtcbiAgfVxufVxuIl19