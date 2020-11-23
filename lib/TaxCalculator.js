"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxCalculator = void 0;
class TaxCalculator {
    static getTax(salary) {
        // if salary is more than 10,000, it is 10 % otherwise it is 5 percent
        if (salary > 10000)
            return salary * 0.1;
        else
            return salary * 0.05;
    }
}
exports.TaxCalculator = TaxCalculator;
//# sourceMappingURL=TaxCalculator.js.map