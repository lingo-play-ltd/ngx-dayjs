/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import * as dayjs_ from 'dayjs';
/** @type {?} */
const dayjs = dayjs_;
export class DifferencePipe {
    /**
     * @param {?} value
     * @param {?} otherValue
     * @param {?=} unit
     * @param {?=} precision
     * @return {?}
     */
    transform(value, otherValue, unit, precision) {
        /** @type {?} */
        const date = dayjs(value);
        /** @type {?} */
        const date2 = (otherValue !== null) ? dayjs(otherValue) : dayjs();
        return date.diff(date2, unit, precision);
    }
}
DifferencePipe.decorators = [
    { type: Pipe, args: [{ name: 'amDifference' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRheWpzLyIsInNvdXJjZXMiOlsiZGlmZmVyZW5jZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEtBQUssTUFBTSxNQUFNLE9BQU8sQ0FBQzs7TUFDMUIsS0FBSyxHQUFHLE1BQU07QUFHcEIsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7O0lBQ3pCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsVUFBZSxFQUFHLElBQVUsRUFBRSxTQUFtQjs7Y0FFL0QsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7O2NBQ25CLEtBQUssR0FBRyxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7UUFFakUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7O1lBUkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBkYXlqc18gZnJvbSAnZGF5anMnO1xuY29uc3QgZGF5anMgPSBkYXlqc187XG5cbkBQaXBlKHsgbmFtZTogJ2FtRGlmZmVyZW5jZScgfSlcbmV4cG9ydCBjbGFzcyBEaWZmZXJlbmNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgb3RoZXJWYWx1ZTogYW55LCAgdW5pdD86IGFueSwgcHJlY2lzaW9uPzogYm9vbGVhbik6IG51bWJlciB7XG5cbiAgICBjb25zdCBkYXRlID0gZGF5anModmFsdWUpO1xuICAgIGNvbnN0IGRhdGUyID0gKG90aGVyVmFsdWUgIT09IG51bGwpID8gZGF5anMob3RoZXJWYWx1ZSkgOiBkYXlqcygpO1xuXG4gICAgcmV0dXJuIGRhdGUuZGlmZihkYXRlMiwgdW5pdCwgcHJlY2lzaW9uKTtcbiAgfVxufVxuIl19