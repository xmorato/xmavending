import React from 'react';
import Switch from '@material-ui/core/Switch';
import { Box } from "@material-ui/core"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { enableProviderMode, disableProviderMode } from "../redux/actions/role/roleActions"
import { useSelector, useDispatch } from 'react-redux'
import { changeMessageAction } from "../redux/actions/display/displayActions"

export const RoleSwitch = () => {

    const providerMode = useSelector(state => state.providerMode);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const modeOn = e.target.checked
        modeOn ? dispatch(enableProviderMode()) : dispatch(disableProviderMode())
        dispatch(changeMessageAction("Provider Mode " + (modeOn ? "ON" : "OFF")))
    }

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" marginBottom="5px">
            <FormControlLabel
                control={<Switch onChange={handleChange} checked={providerMode} name="Role" color="primary" />}
                label="Enable Provider Mode"
            />
        </Box>
    )
}
