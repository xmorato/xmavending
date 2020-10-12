import { enoughCredit, calcCashToReturn } from "../utils/creditUtils.js"

describe("enoughCredit method", () => {

    it("should return false if there is no enough credits to buy", () => {

        const result = enoughCredit(24.5,
            {
                "0.05": 0,
                "0.1": 0,
                "0.2": 0,
                "0.5": 0,
                "1": 0,
                "2": 0
            })
        expect(result).toBe(false)

    })
    it("should return true if there is enough credits to buy", () => {

        const result = enoughCredit(2.5,
            {
                "0.05": 1,
                "0.1": 1,
                "0.2": 2,
                "0.5": 2,
                "1": 1,
                "2": 0
            })
        expect(result).toBe(true)

    })

})
describe("calcCashToReturn method", () => {

    it("it should return null if there is not enough change to return", () => {
        const usercash = {
            "0.05": 0,
            "0.1": 1,
            "0.2": 0,
            "0.5": 0,
            "1": 0,
            "2": 1
        }
        const machinecash = {
            "0.05": 0,
            "0.1": 0,
            "0.2": 0,
            "0.5": 0,
            "1": 0,
            "2": 0
        }

        const result = calcCashToReturn(usercash, machinecash, 0.2)
        expect(result).toBe(null)

    })
    it("it should return an array with coins to return if there is  enough change to return", () => {
        const usercash = {
            "0.05": 1,
            "0.1": 0,
            "0.2": 0,
            "0.5": 0,
            "1": 0,
            "2": 1
        }
        const machinecash = {
            "0.05": 1,
            "0.1": 0,
            "0.2": 0,
            "0.5": 0,
            "1": 0,
            "2": 0
        }

        const result = calcCashToReturn(usercash, machinecash, 0.1)
        expect(result).toStrictEqual([0, 0, 0, 0, 0, 2])

    })
})