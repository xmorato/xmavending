import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Box, Button, Typography } from "@material-ui/core"
import { incrementCoinUserAction, refundCoinsAction } from '../../redux/actions/coins/cashUserActions'
import { incrementCoinMachineAction } from '../../redux/actions/coins/cashMachineActions'
import { totalCreditAmount } from '../../utils/creditUtils'
import { config } from '../../config'
import { resetMessageAction, changeMessageAction } from '../../redux/actions/display/displayActions';

const CoinPanel = () => {

    const isProvider = useSelector(state => state.providerMode)
    const cash = useSelector(state => (isProvider ? state.cashMachine : state.cashUser))

    const dispatch = useDispatch()

    const handleCoinClick = (e) => {
        const coin = e.target.name;
        dispatch(!isProvider
            ? incrementCoinUserAction(coin)
            : incrementCoinMachineAction(coin));
        dispatch(changeMessageAction(`Coin ${coin} ${config.currency} inserted!`))
    }
    const handleRefundClick = () => {
        dispatch(refundCoinsAction());
        dispatch(resetMessageAction())
    }

    const totalCash = totalCreditAmount(cash)

    return (
        <Box display="flex" justifyContent="center" flexDirection="column" paddingTop="15px" alignItems="center">
            <Box display="flex" justifyContent="center" alignItems="center" width="100%">
                <Typography style={{ flex: "0 0 40%", textAlign: "end" }}>
                    Push coins to insert =>
                </Typography>
                <Box paddingBottom="10px" flex="0 0 60%">
                    {Object.entries(config.currencyList)
                        .sort((ant, seg) => Number(ant[0]) - Number(seg[0]))
                        .map((currency) => <button key={currency[0]} onClick={handleCoinClick} name={currency[0]}
                            style={{ width: "50px", height: "50px", fontSize: "19px", borderRadius: "50px", marginLeft: "5px" }} >{currency[0]}</button>)
                    }
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" width="100%">
                <Typography style={{ flex: "0 0 40%", textAlign: "end" }}>
                    # Coins inserted =>
                 </Typography>
                <Box paddingBottom="2px" display="flex" flex="0 0 60%">
                    {Object.entries(cash)
                        .sort((ant, seg) => Number(ant[0]) - Number(seg[0]))
                        .map((currency) =>
                            <Typography key={currency[0]}

                                style={{ width: "50px", textAlign: "center", fontSize: "19px", marginLeft: "5px" }} >{currency[1]}
                            </Typography>)
                    }
                </Box>
            </Box>
            <Typography variant="h5">Total: {totalCash}{config.currency}</Typography>
            {!isProvider &&
                Number(totalCash) !== 0 && <Button variant="outlined" style={{ color: 'red' }} onClick={handleRefundClick}>Refund Credit</Button>}
        </Box >
    );
}

export default CoinPanel;