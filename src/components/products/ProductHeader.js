import { Box, Typography } from "@material-ui/core"
import React from 'react';
import { useStyles } from './ProductHeaderStyle'
import { config } from '../../config'


export const ProductHeader = (props) => {
    const classes = useStyles();
    return (
        <Box className={classes.TableHeader} display="flex" marginLeft="10%" marginRight="10%" borderBottom="1px solid grey">
            <Box flex="0 0 30%" display="flex" justifyContent="flex-start" >
                <Typography variant="h6">PRODUCT</Typography>
            </Box>
            <Box flex="0 0 20%" display="flex" justifyContent="flex-end">
                <Typography variant="h6">{`PRICE IN ${config.currency}`}</Typography>
            </Box>
            <Box flex="0 0 20%" display="flex" justifyContent="flex-end">
                <Typography variant="h6">STOCK</Typography>
            </Box>
            <Box flex="0 0 30%" display="flex" justifyContent="center">
                <Typography variant="h6">ACTION</Typography>
            </Box>
        </Box>)
}