/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import * as dayjs_ from 'dayjs';
/** @type {?} */
const dayjs = dayjs_;
export class FromUnixPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        if (typeof value === 'string') {
            value = +value;
        }
        return dayjs.unix(value);
    }
}
FromUnixPipe.decorators = [
    { type: Pipe, args: [{ name: 'amFromUnix' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS11bml4LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGF5anMvIiwic291cmNlcyI6WyJmcm9tLXVuaXgucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxLQUFLLE1BQU0sTUFBTSxPQUFPLENBQUM7O01BQzFCLEtBQUssR0FBRyxNQUFNO0FBR3BCLE1BQU0sT0FBTyxZQUFZOzs7Ozs7SUFDdkIsU0FBUyxDQUFDLEtBQVUsRUFBRSxHQUFHLElBQWM7UUFDckMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQVBGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZGF5anNfIGZyb20gJ2RheWpzJztcbmNvbnN0IGRheWpzID0gZGF5anNfO1xuXG5AUGlwZSh7IG5hbWU6ICdhbUZyb21Vbml4JyB9KVxuZXhwb3J0IGNsYXNzIEZyb21Vbml4UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgLi4uYXJnczogc3RyaW5nW10pOiBhbnkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9ICt2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGRheWpzLnVuaXgodmFsdWUpO1xuICB9XG59XG4iXX0=