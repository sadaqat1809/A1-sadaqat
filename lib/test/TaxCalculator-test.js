"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TaxCalculator_1 = require("../TaxCalculator");
const chai_1 = require("chai");
describe("TaxCalculator tests", () => {
    it("should get tax for salary less than 10 thousand", () => {
        const tax = TaxCalculator_1.TaxCalculator.getTax(1000);
        chai_1.assert.strictEqual(tax, 50);
    });
    it("should get tax for salary more than 10 thousand", () => {
        const tax = TaxCalculator_1.TaxCalculator.getTax(11000);
        chai_1.assert.strictEqual(tax, 1100);
    });
});
//# sourceMappingURL=TaxCalculator-test.js.map