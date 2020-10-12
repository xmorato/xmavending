import { Box, Typography } from "@material-ui/core"
import React from 'react';
import { useStyles } from './ProductRowStyle'
import { ProductActionButton } from './ProductActionButton'
import { useSelector } from 'react-redux'

export const ProductRow = (props) => {
    const providerMode = useSelector(state => state.providerMode);
    const classes = useStyles();
    const { product, productId } = props
    return (
        <Box className={classes.TableRow} display="flex" marginLeft="10%" marginRight="10%" borderBottom="1px solid grey">
            <Box flex="0 0 30%" display="flex" justifyContent="flex-start" >
                <Typography variant="body1">{product.name}</Typography>
            </Box>
            <Box flex="0 0 20%" display="flex" justifyContent="flex-end">
                <Typography variant="body1">{product.price}</Typography>
            </Box>
            <Box flex="0 0 20%" display="flex" justifyContent="flex-end">
                <Typography variant="body1">{product.stock}</Typography>
            </Box>
            <Box flex="0 0 30%" display="flex" justifyContent="center">
                <ProductActionButton isProvider={providerMode} productId={productId} price={product.price} stock={product.stock} />
            </Box>
        </Box>)
}
