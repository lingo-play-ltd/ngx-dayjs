/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import * as dayjs_ from 'dayjs';
/** @type {?} */
var dayjs = dayjs_;
var SubtractPipe = /** @class */ (function () {
    function SubtractPipe() {
    }
    /**
     * @param {?} value
     * @param {?} amount
     * @param {?=} unit
     * @return {?}
     */
    SubtractPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} amount
     * @param {?=} unit
     * @return {?}
     */
    function (value, amount, unit) {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('SubtractPipe: missing required arguments');
        }
        return dayjs(value).subtract(amount, unit);
    };
    SubtractPipe.decorators = [
        { type: Pipe, args: [{ name: 'amSubtract' },] }
    ];
    return SubtractPipe;
}());
export { SubtractPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VidHJhY3QucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kYXlqcy8iLCJzb3VyY2VzIjpbInN1YnRyYWN0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sS0FBSyxNQUFNLE1BQU0sT0FBTyxDQUFDOztJQUMxQixLQUFLLEdBQUcsTUFBTTtBQUVwQjtJQUFBO0lBUUEsQ0FBQzs7Ozs7OztJQU5HLGdDQUFTOzs7Ozs7SUFBVCxVQUFVLEtBQVUsRUFBRSxNQUFXLEVBQUUsSUFBVTtRQUN6QyxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLENBQUMsRUFBRTtZQUM5RixNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7U0FDL0Q7UUFDRCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2dCQVBKLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7O0lBUTVCLG1CQUFDO0NBQUEsQUFSRCxJQVFDO1NBUFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBkYXlqc18gZnJvbSAnZGF5anMnO1xuY29uc3QgZGF5anMgPSBkYXlqc187XG5cbkBQaXBlKHsgbmFtZTogJ2FtU3VidHJhY3QnIH0pXG5leHBvcnQgY2xhc3MgU3VidHJhY3RQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFtb3VudDogYW55LCB1bml0PzogYW55KTogYW55IHtcbiAgICAgICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnIHx8ICh0eXBlb2YgYW1vdW50ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdW5pdCA9PT0gJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N1YnRyYWN0UGlwZTogbWlzc2luZyByZXF1aXJlZCBhcmd1bWVudHMnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF5anModmFsdWUpLnN1YnRyYWN0KGFtb3VudCwgdW5pdCk7XG4gICAgfVxufVxuIl19