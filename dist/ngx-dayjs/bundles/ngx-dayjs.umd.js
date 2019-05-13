(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('dayjs')) :
    typeof define === 'function' && define.amd ? define('ngx-dayjs', ['exports', '@angular/core', 'dayjs'], factory) :
    (factory((global['ngx-dayjs'] = {}),global.ng.core,global.dayjs));
}(this, (function (exports,core,dayjs_) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
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
            { type: core.Pipe, args: [{ name: 'amAdd' },] }
        ];
        return AddPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var dayjs$1 = dayjs_;
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
                return dayjs$1(value).format(args[0]);
            };
        DateFormatPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'amDateFormat' },] }
        ];
        return DateFormatPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var dayjs$2 = dayjs_;
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
                var date = dayjs$2(value);
                /** @type {?} */
                var date2 = (otherValue !== null) ? dayjs$2(otherValue) : dayjs$2();
                return date.diff(date2, unit, precision);
            };
        DifferencePipe.decorators = [
            { type: core.Pipe, args: [{ name: 'amDifference' },] }
        ];
        return DifferencePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var dayjs$3 = dayjs_;
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
                return dayjs$3.unix(value);
            };
        FromUnixPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'amFromUnix' },] }
        ];
        return FromUnixPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var dayjs$4 = dayjs_;
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
                return dayjs$4(value).format(format);
            };
        ParsePipe.decorators = [
            { type: core.Pipe, args: [{ name: 'amParse' },] }
        ];
        return ParsePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var dayjs$5 = dayjs_;
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
                return dayjs$5(value).subtract(amount, unit);
            };
        SubtractPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'amSubtract' },] }
        ];
        return SubtractPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ANGULAR_DAYJS_PIPES = [
        AddPipe,
        DateFormatPipe,
        DifferencePipe,
        FromUnixPipe,
        ParsePipe,
        SubtractPipe,
    ];
    var DayjsModule = /** @class */ (function () {
        function DayjsModule() {
        }
        DayjsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: ANGULAR_DAYJS_PIPES,
                        exports: ANGULAR_DAYJS_PIPES
                    },] }
        ];
        return DayjsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.AddPipe = AddPipe;
    exports.DateFormatPipe = DateFormatPipe;
    exports.DifferencePipe = DifferencePipe;
    exports.FromUnixPipe = FromUnixPipe;
    exports.ParsePipe = ParsePipe;
    exports.DayjsModule = DayjsModule;
    exports.SubtractPipe = SubtractPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-dayjs.umd.js.map