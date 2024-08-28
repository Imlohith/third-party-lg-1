import React from 'react'
import TextField from '@mui/material/TextField';

function CustomInput(props) {
    return (
        <TextField
            required
            fullWidth
            autoComplete="email"
            {...props}
            InputLabelProps={{
                shrink: true,
            }}
        />
    )
}

export default CustomInput