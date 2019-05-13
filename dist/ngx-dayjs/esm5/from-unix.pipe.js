/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import * as dayjs_ from 'dayjs';
/** @type {?} */
var dayjs = dayjs_;
var FromUnixPipe = /** @class */ (function () {
    function FromUnixPipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    FromUnixPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (typeof value === 'string') {
            value = +value;
        }
        return dayjs.unix(value);
    };
    FromUnixPipe.decorators = [
        { type: Pipe, args: [{ name: 'amFromUnix' },] }
    ];
    return FromUnixPipe;
}());
export { FromUnixPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS11bml4LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGF5anMvIiwic291cmNlcyI6WyJmcm9tLXVuaXgucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxLQUFLLE1BQU0sTUFBTSxPQUFPLENBQUM7O0lBQzFCLEtBQUssR0FBRyxNQUFNO0FBRXBCO0lBQUE7SUFRQSxDQUFDOzs7Ozs7SUFOQyxnQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQVU7UUFBRSxjQUFpQjthQUFqQixVQUFpQixFQUFqQixxQkFBaUIsRUFBakIsSUFBaUI7WUFBakIsNkJBQWlCOztRQUNyQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUM7U0FDaEI7UUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBUEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTs7SUFRNUIsbUJBQUM7Q0FBQSxBQVJELElBUUM7U0FQWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGRheWpzXyBmcm9tICdkYXlqcyc7XG5jb25zdCBkYXlqcyA9IGRheWpzXztcblxuQFBpcGUoeyBuYW1lOiAnYW1Gcm9tVW5peCcgfSlcbmV4cG9ydCBjbGFzcyBGcm9tVW5peFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIC4uLmFyZ3M6IHN0cmluZ1tdKTogYW55IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSArdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBkYXlqcy51bml4KHZhbHVlKTtcbiAgfVxufVxuIl19