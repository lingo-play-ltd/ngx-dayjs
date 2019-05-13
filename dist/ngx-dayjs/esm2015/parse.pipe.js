/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import * as dayjs_ from 'dayjs';
/** @type {?} */
const dayjs = dayjs_;
export class ParsePipe {
    /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    transform(value, format) {
        return dayjs(value).format(format);
    }
}
ParsePipe.decorators = [
    { type: Pipe, args: [{ name: 'amParse' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kYXlqcy8iLCJzb3VyY2VzIjpbInBhcnNlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sS0FBSyxNQUFNLE1BQU0sT0FBTyxDQUFDOztNQUMxQixLQUFLLEdBQUcsTUFBTTtBQUdwQixNQUFNLE9BQU8sU0FBUzs7Ozs7O0lBQ3BCLFNBQVMsQ0FBQyxLQUFhLEVBQUUsTUFBYztRQUNyQyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGRheWpzXyBmcm9tICdkYXlqcyc7XG5jb25zdCBkYXlqcyA9IGRheWpzXztcblxuQFBpcGUoeyBuYW1lOiAnYW1QYXJzZScgfSlcbmV4cG9ydCBjbGFzcyBQYXJzZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gZGF5anModmFsdWUpLmZvcm1hdChmb3JtYXQpO1xuICB9XG59XG4iXX0=