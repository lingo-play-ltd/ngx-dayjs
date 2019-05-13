/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import * as dayjs_ from 'dayjs';
/** @type {?} */
var dayjs = dayjs_;
var AddPipe = /** @class */ (function () {
    function AddPipe() {
    }
    /**
     * @param {?} value
     * @param {?} amount
     * @param {?=} unit
     * @return {?}
     */
    AddPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} amount
     * @param {?=} unit
     * @return {?}
     */
    function (value, amount, unit) {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('AddPipe: missing required arguments');
        }
        return dayjs(value).add(amount, unit);
    };
    AddPipe.decorators = [
        { type: Pipe, args: [{ name: 'amAdd' },] }
    ];
    return AddPipe;
}());
export { AddPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGF5anMvIiwic291cmNlcyI6WyJhZGQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxLQUFLLE1BQU0sTUFBTSxPQUFPLENBQUM7O0lBQzFCLEtBQUssR0FBRyxNQUFNO0FBRXBCO0lBQUE7SUFRQSxDQUFDOzs7Ozs7O0lBTkcsMkJBQVM7Ozs7OztJQUFULFVBQVUsS0FBVSxFQUFFLE1BQVcsRUFBRSxJQUFVO1FBQ3pDLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE9BQU8sSUFBSSxLQUFLLFdBQVcsQ0FBQyxFQUFFO1lBQzlGLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUMxRDtRQUNELE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBUEosSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTs7SUFRdkIsY0FBQztDQUFBLEFBUkQsSUFRQztTQVBZLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZGF5anNfIGZyb20gJ2RheWpzJztcbmNvbnN0IGRheWpzID0gZGF5anNfO1xuXG5AUGlwZSh7IG5hbWU6ICdhbUFkZCcgfSlcbmV4cG9ydCBjbGFzcyBBZGRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFtb3VudDogYW55LCB1bml0PzogYW55KTogYW55IHtcbiAgICAgICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnIHx8ICh0eXBlb2YgYW1vdW50ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdW5pdCA9PT0gJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FkZFBpcGU6IG1pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnRzJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRheWpzKHZhbHVlKS5hZGQoYW1vdW50LCB1bml0KTtcbiAgICB9XG59XG4iXX0=