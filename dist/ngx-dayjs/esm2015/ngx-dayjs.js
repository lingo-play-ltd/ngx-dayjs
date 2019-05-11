import { Pipe, NgModule } from '@angular/core';
import * as dayjs_ from 'dayjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const dayjs = dayjs_;
class AddPipe {
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
    { type: Pipe, args: [{ name: 'amAdd' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const dayjs$1 = dayjs_;
class DateFormatPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        if (!value) {
            return '';
        }
        return dayjs$1(value).format(args[0]);
    }
}
DateFormatPipe.decorators = [
    { type: Pipe, args: [{ name: 'amDateFormat' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const dayjs$2 = dayjs_;
class DifferencePipe {
    /**
     * @param {?} value
     * @param {?} otherValue
     * @param {?=} unit
     * @param {?=} precision
     * @return {?}
     */
    transform(value, otherValue, unit, precision) {
        const /** @type {?} */ date = dayjs$2(value);
        const /** @type {?} */ date2 = (otherValue !== null) ? dayjs$2(otherValue) : dayjs$2();
        return date.diff(date2, unit, precision);
    }
}
DifferencePipe.decorators = [
    { type: Pipe, args: [{ name: 'amDifference' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const dayjs$3 = dayjs_;
class FromUnixPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        if (typeof value === 'string') {
            value = +value;
        }
        return dayjs$3(value).unix();
    }
}
FromUnixPipe.decorators = [
    { type: Pipe, args: [{ name: 'amFromUnix' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const dayjs$4 = dayjs_;
class ParsePipe {
    /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    transform(value, format) {
        return dayjs$4(value).format(format);
    }
}
ParsePipe.decorators = [
    { type: Pipe, args: [{ name: 'amParse' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const dayjs$5 = dayjs_;
class SubtractPipe {
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
        return dayjs$5(value).subtract(amount, unit);
    }
}
SubtractPipe.decorators = [
    { type: Pipe, args: [{ name: 'amSubtract' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const ANGULAR_DAYJS_PIPES = [
    AddPipe,
    DateFormatPipe,
    DifferencePipe,
    FromUnixPipe,
    ParsePipe,
    SubtractPipe,
];
class DayjsModule {
}
DayjsModule.decorators = [
    { type: NgModule, args: [{
                declarations: ANGULAR_DAYJS_PIPES,
                exports: ANGULAR_DAYJS_PIPES
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { AddPipe, DateFormatPipe, DifferencePipe, FromUnixPipe, ParsePipe, DayjsModule, SubtractPipe };
//# sourceMappingURL=ngx-dayjs.js.map
