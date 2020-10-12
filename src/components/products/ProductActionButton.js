import { Box, Button, Typography } from "@material-ui/core"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { decrementStockAction, incrementStockAction } from '../../redux/actions/products/stockActions'
import { enoughCredit, getChangeToReturn, getFinalMachineCash, getFormatedChange } from '../../utils/creditUtils'
import { changeMessageAction } from '../../redux/actions/display/displayActions'
import { updateMachineCashAction } from '../../redux/actions/coins/cashMachineActions'
import { refundCoinsAction } from "../../redux/actions/coins/cashUserActions";


export const ProductActionButton = (props) => {
    const { productId, isProvider, price, stock } = props;
    const dispatch = useDispatch();
    const credit = useSelector(state => state.cashUser)
    const machineCash = useSelector(state => state.cashMachine)
    //  Provider onClick events
    const onAddClick = () => dispatch(incrementStockAction(productId))
    const onDecrementClick = () => dispatch(decrementStockAction(productId))

    //Custormer onClick event (buyButton only enabled if enough stock)
    const onBuyClick = () => {
        // user has enough credit
        if (enoughCredit(price, credit)) {

            const changeToReturnArray = getChangeToReturn(credit, machineCash, price)

            if (!!changeToReturnArray) { //machine has enough cash to return change

                dispatch(decrementStockAction(productId))
                dispatch(updateMachineCashAction(getFinalMachineCash(credit, machineCash, changeToReturnArray)))
                dispatch(refundCoinsAction())

                const changeTotReturMessage =
                    (changeToReturnArray.length === 0)
                        ? ""
                        : "Your change:" + getFormatedChange(changeToReturnArray, machineCash)

                dispatch(changeMessageAction("Thank you! enjoy your drink!! " + changeTotReturMessage))

            } else dispatch(changeMessageAction("Sorry, there is no change for this import..."))

        } else dispatch(changeMessageAction("Sorry, not enough credit for this product..."))

    }

    return (
        !isProvider
            ?
            <Button variant="outlined" disabled={stock === 0} onClick={onBuyClick}>
                <Typography style={stock === 0 ? { color: 'red' } : { color: 'black' }}>
                    {stock === 0 ? 'OUT OF STOCK' : 'Buy'}
                </Typography>
            </Button>
            : <Box>
                <Button variant="outlined" onClick={onAddClick}>+</Button>
                <Button variant="outlined" disabled={stock === 0} onClick={onDecrementClick}>-</Button>
            </Box>
    )
}