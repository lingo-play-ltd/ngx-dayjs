/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import * as dayjs_ from 'dayjs';
/** @type {?} */
var dayjs = dayjs_;
var ParsePipe = /** @class */ (function () {
    function ParsePipe() {
    }
    /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    ParsePipe.prototype.transform = /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    function (value, format) {
        return dayjs(value).format(format);
    };
    ParsePipe.decorators = [
        { type: Pipe, args: [{ name: 'amParse' },] }
    ];
    return ParsePipe;
}());
export { ParsePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kYXlqcy8iLCJzb3VyY2VzIjpbInBhcnNlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sS0FBSyxNQUFNLE1BQU0sT0FBTyxDQUFDOztJQUMxQixLQUFLLEdBQUcsTUFBTTtBQUVwQjtJQUFBO0lBS0EsQ0FBQzs7Ozs7O0lBSEMsNkJBQVM7Ozs7O0lBQVQsVUFBVSxLQUFhLEVBQUUsTUFBYztRQUNyQyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Z0JBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTs7SUFLekIsZ0JBQUM7Q0FBQSxBQUxELElBS0M7U0FKWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZGF5anNfIGZyb20gJ2RheWpzJztcbmNvbnN0IGRheWpzID0gZGF5anNfO1xuXG5AUGlwZSh7IG5hbWU6ICdhbVBhcnNlJyB9KVxuZXhwb3J0IGNsYXNzIFBhcnNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiBkYXlqcyh2YWx1ZSkuZm9ybWF0KGZvcm1hdCk7XG4gIH1cbn1cbiJdfQ==