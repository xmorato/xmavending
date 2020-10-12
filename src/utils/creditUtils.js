import { config } from '../config'

/**
 * Check if credit is enough to buy a product with this price
 * @param {*} price 
 * @param {*} credit 
 */

export const enoughCredit = (price, credit) => {
    const total = totalCreditAmount(credit)
    return (total >= price);
}


/**
 * Flat diferent coins to total
 * @param {*} credit 
 */
export const totalCreditAmount = (credit) => {
    const coinsArray = Object.entries(credit);
    return coinsArray.reduce((acum, coin) => {
        return (acum + (Number(coin[0]) * coin[1]))
    }, 0).toFixed(2)

}

/***
 * @returns null if no change available, 
 * [] if we don´t need to return any change, 
 * Array with change to return if there is change available to return
 */

export const getChangeToReturn = (userCash, machineCash, price) => {
    const totalUserCredit = totalCreditAmount(userCash);
    const totalCashToReturn = Number((totalUserCredit - price).toFixed(2));
    if (totalCashToReturn === 0) return [];
    return calcCashToReturn(userCash, machineCash, totalCashToReturn)
}
/***
 * @returns an new cashMachine object with the usercash added 
 */
export const getMachineUpdated = (userCash, machineCash) => {

    // creating a new object to be returned
    const machineUpdated = { ...machineCash } //{"1":cantidadMachine}

    //traversing userCash 
    Object.entries(userCash)
        .forEach(element => { // element tendra ["1", cantidaUsuarioParaEstaMoneda]
            machineUpdated[element[0]] = machineUpdated[Number(element[0])] + Number(element[1])
        });

    return machineUpdated
}

/**
 * @returns null if there is not enough change to return, 
 * or an array with the number of coins to return. This array as positions as different type coins,
 * and IMPORTANT, this array is sorted from higher coin value to lower.
 * example, if we have coins: 2 eur, 1eur and 0.5eru
 * this array returned: [3,0,1] means that we have to return 3 coins of 2 eur, zero of 1 eur and 1 coin of 0.5eur 
 */
export const calcCashToReturn = (userCash, machineCash, change) => {

    /*We create an array with all the avaiable coins we have
     and create another one with the same size and filled with zero´s.
     This latest array will contain the amount of coins to return.
     IMPORTANT: we need to traverse the machine coins stock and the new array
     to return in the same order (from high to low value)*/

    const coins = Object.keys(userCash).sort((ant, seg) => Number(seg) - Number(ant))
    //coins: ['2','1','0.5'......] sorted from higher to lower

    const changeToReturn = [...coins].fill(0);
    //changeToReturn=[0,0,0....0] new array to return

    // 1- move all user coins to the machine so we can take them in account to return the change
    const machineCashUpdated = getMachineUpdated(userCash, machineCash)
    const machineArray = Object.entries(machineCashUpdated)
        .sort((ant, seg) => Number(seg[0]) - Number(ant[0])) // [["2",0],["1",1]....]

    // 2- Traverse all the coins values from higher value to lower
    for (let i = 0; i < machineArray.length; i++) {
        // if change is greather or equal to the coin value
        if (change >= Number(coins[i])) {
            //we take the min value between the amount of coins of this type we need for this change
            //and the amount of coins of this type we have at the machine
            const min = Math.min(parseInt(change / Number(coins[i])), Number(machineArray[i][1]))
            if (min > 0) { // if we can use a coin for this change
                //update change return for this coin type
                changeToReturn[i] = min
                // substract to change this value 
                change = Number((change - (changeToReturn[i] * Number(coins[i]))).toFixed(2));
            }
        }
    }
    return (Number(change) === 0 ? changeToReturn : null)
}

/***
 * @returns an object with the final cashMachine value after taking the user chash and returning the 
 * correct chash to the user with the change to return
 */
export const getFinalMachineCash = (userCash, machineCash, changeToReturnArray) => {
    //first update machine with all user credit
    const machineUpdated = getMachineUpdated(userCash, machineCash)
    const machineUpdatedArray = Object.entries(machineUpdated)
        .sort((ant, next) => (Number(next[0]) - Number(ant[0])))
    //second substract the change to return
    for (let i = 0; i < changeToReturnArray.length; i++) {
        machineUpdatedArray[i][1] = machineUpdatedArray[i][1] - changeToReturnArray[i]
    }
    //we return the change in object format so we can update the state in store with that value
    const ret = machineUpdatedArray
        .reduce((acum, elem) => {
            return ({ ...acum, [elem[0]]: elem[1] })
        }
            , {})
    return ret
}

/**
 * @param cashObject cash object with coins and amounts
 * example: 
 *      {
 *      "0.5":2,
 *      "1": 0,
 *      "2":3
 *      }
 * @returns array of sorted coins(another 2 positions array) from higher value to lower value
 * example: [["2",3],["1",0],["0.5",2]....]
 */
export const getSortedArray = (cashObject) => {
    return Object.entries(cashObject)
        .sort((ant, seg) => Number(seg[0]) - Number(ant[0]))
}
/**
 * @param cashToReturnArray array of sorted coins amount to return
 * example [1,0,0...]
 * @param cashLabels cash object to get the label for every coin to display in message
 */
export const getFormatedChange = (cashToReturnArray, cashLabels) => {
    const cashLabelsSorted = getSortedArray(cashLabels)
    //[["2",3],["1",0],["0.5",2]....]

    return (cashToReturnArray.reduce(
        (acum, amount, i) => {
            if (amount > 0) {
                return acum = acum + `${amount} of ${cashLabelsSorted[i][0]}${config.currency}, `
            }
            return acum
        }
        , "").slice(0, -2)) // removing last " ,"

}