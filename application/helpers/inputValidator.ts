import { ErrorMsg } from "../constants/errorMsg";
import { Province } from "../constants/province";

export class InputValidator {
    public static checkItemNumber(itemNumStr: string) {
        let itemNum = null;
        try {
            itemNum = parseInt(itemNumStr);
            if ( isNaN(itemNum)  || itemNum < 0 ) {
                throw new Error(ErrorMsg.InvalidItemNumber);
            }
        } catch {
            throw new Error(ErrorMsg.InvalidItemNumber);
        }
        return itemNum;
    }

    public static checkPrice(priceStr: string) {
        let price = null;
        try {
            price = parseFloat(priceStr)
            if ( isNaN(price) ||price < 0 ) {
                throw new Error(ErrorMsg.InvalidPrice);
            }
        } catch (error) {
            throw new Error(ErrorMsg.InvalidPrice);
        }
        return price;
    }

    public static checkProvince(provinceStr: string) {
        let province = null;

        switch (provinceStr) {
            case "AB":
                province = Province.AB;
                break;
            case "ON":
                province = Province.ON;
                break;
            case "QC":
                province = Province.QC;
                break;
            case "MI":
                province = Province.MI;
                break;
            case "DE":
                province = Province.DE;
                break;
            default:
                throw new Error(ErrorMsg.InvalidProvince);
        }

        return province;
    }
}
