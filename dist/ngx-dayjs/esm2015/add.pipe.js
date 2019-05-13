/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import * as dayjs_ from 'dayjs';
/** @type {?} */
const dayjs = dayjs_;
export class AddPipe {
    /**
     * @param {?} value
     * @param {?} amount
     * @param {?=} unit
     * @return {?}
     */
    transform(value, amount, unit) {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('AddPipe: missing required arguments');
        }
        return dayjs(value).add(amount, unit);
    }
}
AddPipe.decorators = [
    { type: Pipe, args: [{ name: 'amAdd' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGF5anMvIiwic291cmNlcyI6WyJhZGQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxLQUFLLE1BQU0sTUFBTSxPQUFPLENBQUM7O01BQzFCLEtBQUssR0FBRyxNQUFNO0FBR3BCLE1BQU0sT0FBTyxPQUFPOzs7Ozs7O0lBQ2hCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsTUFBVyxFQUFFLElBQVU7UUFDekMsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksT0FBTyxJQUFJLEtBQUssV0FBVyxDQUFDLEVBQUU7WUFDOUYsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUFQSixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGRheWpzXyBmcm9tICdkYXlqcyc7XG5jb25zdCBkYXlqcyA9IGRheWpzXztcblxuQFBpcGUoeyBuYW1lOiAnYW1BZGQnIH0pXG5leHBvcnQgY2xhc3MgQWRkUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhbW91bnQ6IGFueSwgdW5pdD86IGFueSk6IGFueSB7XG4gICAgICAgIGlmICh0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJyB8fCAodHlwZW9mIGFtb3VudCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHVuaXQgPT09ICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBZGRQaXBlOiBtaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50cycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXlqcyh2YWx1ZSkuYWRkKGFtb3VudCwgdW5pdCk7XG4gICAgfVxufVxuIl19