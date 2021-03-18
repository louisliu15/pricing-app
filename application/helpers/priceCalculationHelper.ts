import { Province} from "../constants/province";

export class PriceCalculationHelper {
    public static totalPriceCalculation (itemNum: number, price: number, province: Province) {
        const totalPrice = itemNum * price;
        const discount = PriceCalculationHelper.calculateDiscount(totalPrice);
        const finalPrice = totalPrice * (100 - discount) * (100 + province) / 10000;
        // Keep 2 digits after decimal point
        return finalPrice.toFixed(2);
    }

    private static calculateDiscount (totalPrice: number) {
        if (totalPrice < 1000) {
            return 0;
        } else if (totalPrice >= 1000 && totalPrice < 5000) {
            return 3;
        } else if (totalPrice >= 5000 && totalPrice < 7000) {
            return 5;
        } else if (totalPrice >= 7000 && totalPrice < 10000) {
            return 7;
        } else if (totalPrice >= 10000) {
            return 10;
        }
    }
}
