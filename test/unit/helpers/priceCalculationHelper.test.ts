import { expect } from 'chai';
import 'mocha';
import { PriceCalculationHelper } from "../../../application/helpers/priceCalculationHelper";
import { Province } from "../../../application/constants/province";

describe("Test Price Calculation", () => {
    it("Price calculation with params: item: 500, price: 1, province: ON", () => {
        const finalPrice = PriceCalculationHelper.totalPriceCalculation(500, 1, Province.ON);
        expect(finalPrice).to.be.equal("565.00");
    });
    it("Price calculation with params: item: 3600, price: 2.25, province: MI", () => {
        const finalPrice = PriceCalculationHelper.totalPriceCalculation(3600, 2.25, Province.MI);
        expect(finalPrice).to.be.equal("7984.98");
    });
});
