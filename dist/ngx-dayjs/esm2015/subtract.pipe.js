/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import * as dayjs_ from 'dayjs';
/** @type {?} */
const dayjs = dayjs_;
export class SubtractPipe {
    /**
     * @param {?} value
     * @param {?} amount
     * @param {?=} unit
     * @return {?}
     */
    transform(value, amount, unit) {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('SubtractPipe: missing required arguments');
        }
        return dayjs(value).subtract(amount, unit);
    }
}
SubtractPipe.decorators = [
    { type: Pipe, args: [{ name: 'amSubtract' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VidHJhY3QucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kYXlqcy8iLCJzb3VyY2VzIjpbInN1YnRyYWN0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sS0FBSyxNQUFNLE1BQU0sT0FBTyxDQUFDOztNQUMxQixLQUFLLEdBQUcsTUFBTTtBQUdwQixNQUFNLE9BQU8sWUFBWTs7Ozs7OztJQUNyQixTQUFTLENBQUMsS0FBVSxFQUFFLE1BQVcsRUFBRSxJQUFVO1FBQ3pDLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE9BQU8sSUFBSSxLQUFLLFdBQVcsQ0FBQyxFQUFFO1lBQzlGLE1BQU0sSUFBSSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQztTQUMvRDtRQUNELE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7O1lBUEosSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBkYXlqc18gZnJvbSAnZGF5anMnO1xuY29uc3QgZGF5anMgPSBkYXlqc187XG5cbkBQaXBlKHsgbmFtZTogJ2FtU3VidHJhY3QnIH0pXG5leHBvcnQgY2xhc3MgU3VidHJhY3RQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFtb3VudDogYW55LCB1bml0PzogYW55KTogYW55IHtcbiAgICAgICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnIHx8ICh0eXBlb2YgYW1vdW50ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdW5pdCA9PT0gJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N1YnRyYWN0UGlwZTogbWlzc2luZyByZXF1aXJlZCBhcmd1bWVudHMnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF5anModmFsdWUpLnN1YnRyYWN0KGFtb3VudCwgdW5pdCk7XG4gICAgfVxufVxuIl19