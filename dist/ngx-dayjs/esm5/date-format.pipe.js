/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import * as dayjs_ from 'dayjs';
/** @type {?} */
var dayjs = dayjs_;
var DateFormatPipe = /** @class */ (function () {
    function DateFormatPipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    DateFormatPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!value) {
            return '';
        }
        return dayjs(value).format(args[0]);
    };
    DateFormatPipe.decorators = [
        { type: Pipe, args: [{ name: 'amDateFormat' },] }
    ];
    return DateFormatPipe;
}());
export { DateFormatPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mb3JtYXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kYXlqcy8iLCJzb3VyY2VzIjpbImRhdGUtZm9ybWF0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sS0FBSyxNQUFNLE1BQU0sT0FBTyxDQUFDOztJQUMxQixLQUFLLEdBQUcsTUFBTTtBQUVwQjtJQUFBO0lBTUEsQ0FBQzs7Ozs7O0lBSkMsa0NBQVM7Ozs7O0lBQVQsVUFBVSxLQUFVO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDbEMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLE9BQU8sRUFBRSxDQUFDO1NBQUU7UUFDMUIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2dCQUxGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7O0lBTTlCLHFCQUFDO0NBQUEsQUFORCxJQU1DO1NBTFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBkYXlqc18gZnJvbSAnZGF5anMnO1xuY29uc3QgZGF5anMgPSBkYXlqc187XG5cbkBQaXBlKHsgbmFtZTogJ2FtRGF0ZUZvcm1hdCcgfSlcbmV4cG9ydCBjbGFzcyBEYXRlRm9ybWF0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgLi4uYXJnczogYW55W10pOiBzdHJpbmcge1xuICAgIGlmICghdmFsdWUpIHsgcmV0dXJuICcnOyB9XG4gICAgcmV0dXJuIGRheWpzKHZhbHVlKS5mb3JtYXQoYXJnc1swXSk7XG4gIH1cbn1cbiJdfQ==