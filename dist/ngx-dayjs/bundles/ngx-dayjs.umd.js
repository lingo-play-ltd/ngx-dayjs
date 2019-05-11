(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('dayjs')) :
	typeof define === 'function' && define.amd ? define('ngx-dayjs', ['exports', '@angular/core', 'dayjs'], factory) :
	(factory((global['ngx-dayjs'] = {}),global.ng.core,global.dayjs));
}(this, (function (exports,core,dayjs_) { 'use strict';

var dayjs = dayjs_;
var AddPipe = /** @class */ (function () {
    function AddPipe() {
    }
    AddPipe.prototype.transform = function (value, amount, unit) {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('AddPipe: missing required arguments');
        }
        return dayjs(value).add(amount, unit);
    };
    return AddPipe;
}());
AddPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'amAdd' },] },
];
var dayjs$1 = dayjs_;
var DateFormatPipe = /** @class */ (function () {
    function DateFormatPipe() {
    }
    DateFormatPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!value) {
            return '';
        }
        return dayjs$1(value).format(args[0]);
    };
    return DateFormatPipe;
}());
DateFormatPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'amDateFormat' },] },
];
var dayjs$2 = dayjs_;
var DifferencePipe = /** @class */ (function () {
    function DifferencePipe() {
    }
    DifferencePipe.prototype.transform = function (value, otherValue, unit, precision) {
        var date = dayjs$2(value);
        var date2 = (otherValue !== null) ? dayjs$2(otherValue) : dayjs$2();
        return date.diff(date2, unit, precision);
    };
    return DifferencePipe;
}());
DifferencePipe.decorators = [
    { type: core.Pipe, args: [{ name: 'amDifference' },] },
];
var dayjs$3 = dayjs_;
var FromUnixPipe = /** @class */ (function () {
    function FromUnixPipe() {
    }
    FromUnixPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (typeof value === 'string') {
            value = +value;
        }
        return dayjs$3(value).unix();
    };
    return FromUnixPipe;
}());
FromUnixPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'amFromUnix' },] },
];
var dayjs$4 = dayjs_;
var ParsePipe = /** @class */ (function () {
    function ParsePipe() {
    }
    ParsePipe.prototype.transform = function (value, format) {
        return dayjs$4(value).format(format);
    };
    return ParsePipe;
}());
ParsePipe.decorators = [
    { type: core.Pipe, args: [{ name: 'amParse' },] },
];
var dayjs$5 = dayjs_;
var SubtractPipe = /** @class */ (function () {
    function SubtractPipe() {
    }
    SubtractPipe.prototype.transform = function (value, amount, unit) {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('SubtractPipe: missing required arguments');
        }
        return dayjs$5(value).subtract(amount, unit);
    };
    return SubtractPipe;
}());
SubtractPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'amSubtract' },] },
];
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
    return DayjsModule;
}());
DayjsModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: ANGULAR_DAYJS_PIPES,
                exports: ANGULAR_DAYJS_PIPES
            },] },
];

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
