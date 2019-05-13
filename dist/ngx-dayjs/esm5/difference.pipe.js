/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import * as dayjs_ from 'dayjs';
/** @type {?} */
var dayjs = dayjs_;
var DifferencePipe = /** @class */ (function () {
    function DifferencePipe() {
    }
    /**
     * @param {?} value
     * @param {?} otherValue
     * @param {?=} unit
     * @param {?=} precision
     * @return {?}
     */
    DifferencePipe.prototype.transform = /**
     * @param {?} value
     * @param {?} otherValue
     * @param {?=} unit
     * @param {?=} precision
     * @return {?}
     */
    function (value, otherValue, unit, precision) {
        /** @type {?} */
        var date = dayjs(value);
        /** @type {?} */
        var date2 = (otherValue !== null) ? dayjs(otherValue) : dayjs();
        return date.diff(date2, unit, precision);
    };
    DifferencePipe.decorators = [
        { type: Pipe, args: [{ name: 'amDifference' },] }
    ];
    return DifferencePipe;
}());
export { DifferencePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRheWpzLyIsInNvdXJjZXMiOlsiZGlmZmVyZW5jZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEtBQUssTUFBTSxNQUFNLE9BQU8sQ0FBQzs7SUFDMUIsS0FBSyxHQUFHLE1BQU07QUFFcEI7SUFBQTtJQVNBLENBQUM7Ozs7Ozs7O0lBUEMsa0NBQVM7Ozs7Ozs7SUFBVCxVQUFVLEtBQVUsRUFBRSxVQUFlLEVBQUcsSUFBVSxFQUFFLFNBQW1COztZQUUvRCxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQzs7WUFDbkIsS0FBSyxHQUFHLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtRQUVqRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDOztnQkFSRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFOztJQVM5QixxQkFBQztDQUFBLEFBVEQsSUFTQztTQVJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZGF5anNfIGZyb20gJ2RheWpzJztcbmNvbnN0IGRheWpzID0gZGF5anNfO1xuXG5AUGlwZSh7IG5hbWU6ICdhbURpZmZlcmVuY2UnIH0pXG5leHBvcnQgY2xhc3MgRGlmZmVyZW5jZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIG90aGVyVmFsdWU6IGFueSwgIHVuaXQ/OiBhbnksIHByZWNpc2lvbj86IGJvb2xlYW4pOiBudW1iZXIge1xuXG4gICAgY29uc3QgZGF0ZSA9IGRheWpzKHZhbHVlKTtcbiAgICBjb25zdCBkYXRlMiA9IChvdGhlclZhbHVlICE9PSBudWxsKSA/IGRheWpzKG90aGVyVmFsdWUpIDogZGF5anMoKTtcblxuICAgIHJldHVybiBkYXRlLmRpZmYoZGF0ZTIsIHVuaXQsIHByZWNpc2lvbik7XG4gIH1cbn1cbiJdfQ==