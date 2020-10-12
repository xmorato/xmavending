import { Box, Typography } from "@material-ui/core"
import React from 'react';
import { useSelector } from "react-redux"

export const DisplayPanel = () => {

    const message = useSelector((state) => state.display)
    return (
        <Box display="flex" marginBottom="5px" marginTop="5px" height="60px" justifyContent="center" alignItems="center" marginLeft="10%" marginRight="10%" border="1px solid grey">
            <Typography variant="h5">
                {message}
            </Typography>
        </Box>)
}
