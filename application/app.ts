import { PriceCalculationHelper } from "./helpers/priceCalculationHelper";
import { InputValidator } from "./helpers/inputValidator"

function main() {
    // Get arguments from command line
    const args = process.argv;
    try {
        // Get values from arguments and do validation check
        const itemNum = InputValidator.checkItemNumber(args[2]);
        const price = InputValidator.checkPrice(args[3]);
        const province = InputValidator.checkProvince(args[4]);
    
        console.log("$" + PriceCalculationHelper.totalPriceCalculation(itemNum, price, province));
    } catch (error) {
        console.error(error.message);
    }
}

main();
