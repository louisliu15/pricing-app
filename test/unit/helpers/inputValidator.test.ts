import { expect } from 'chai';
import 'mocha';
import { InputValidator } from "../../../application/helpers/inputValidator";
import { ErrorMsg } from "../../../application/constants/errorMsg";
import { Province } from '../../../application/constants/province';

describe("Test Input Validation", () => {
    describe("Test Item Number Input", () => {
        it("Test passing valid item number", () => {
            const itemNum = InputValidator.checkItemNumber("100");
            expect(itemNum).to.be.equal(100);
        });

        it("Test passing float item number", () => {
            const itemNum = InputValidator.checkItemNumber("100.5");
            expect(itemNum).to.be.equal(100);

        });

        it("Test passing negative item number", () => {
            try {
                const itemNum = InputValidator.checkItemNumber("-100");
            } catch (error) {
                expect(error.message).to.be.equals(ErrorMsg.InvalidItemNumber);
            }
        });

        it("Test item number not passed", () => {
            try {
                const itemNum = InputValidator.checkItemNumber(undefined);
            } catch (error) {
                expect(error.message).to.be.equals(ErrorMsg.InvalidItemNumber);
            }
        });
    });

    describe("Test Price Input", () => {
        it("Test passing valid item number", () => {
            const price = InputValidator.checkPrice("1.25");
            expect(price).to.be.equal(1.25);
        });

        it("Test passing negative item number", () => {
            try {
                const price = InputValidator.checkPrice("-2.25");
            } catch (error) {
                expect(error.message).to.be.equals(ErrorMsg.InvalidPrice);
            }
        });

        it("Test price not passed", () => {
            try {
                const price = InputValidator.checkPrice(undefined);
            } catch (error) {
                expect(error.message).to.be.equals(ErrorMsg.InvalidPrice);
            }
        });
    });

    describe("Test Province Input", () => {
        it("Test passing valid province", () => {
            const province = InputValidator.checkProvince("ON");
            expect(province).to.be.equal(Province.ON);
        });

        it("Test passing invalid province", () => {
            try {
                const province = InputValidator.checkProvince("OA");
            } catch (error) {
                expect(error.message).to.be.equals(ErrorMsg.InvalidProvince);
            }
        });

        it("Test price not passed", () => {
            try {
                const province = InputValidator.checkProvince(undefined);
            } catch (error) {
                expect(error.message).to.be.equals(ErrorMsg.InvalidProvince);
            }
        });
    });
});
