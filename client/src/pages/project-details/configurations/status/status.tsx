import React from "react";
import Box from "@mui/material/Box";
import Radio from '@mui/material/Radio';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import styleStatus from "./styleStatus";

const Status: React.FC = () => {
    const classes = styleStatus()

    return (
        <Box className={classes.wrap}>
            <Typography fontWeight={600}>Project Status</Typography>

            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="active"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="active" control={<Radio/>} style={{marginTop: '-30px'}} label={
                        <Box marginBottom={'20px'} paddingTop={'60px'}>
                            <Typography fontWeight={600}>Active</Typography>
                            <Typography fontSize={'14px'}>
                                While the projects is in active state you can add tasks, discussions,
                                files, comments etc.
                            </Typography>
                        </Box>
                    }/>

                    <FormControlLabel value="disabled" control={<Radio/>} style={{marginTop: '-60px'}} label={
                        <Box marginBottom={'20px'} paddingTop={'65px'}>
                            <Typography fontWeight={600}>Disabled</Typography>
                            <Typography fontSize={'14px'}>
                                Once a project is archived, you'll not be able to add tasks, discussions, files
                                etc.
                            </Typography>
                        </Box>
                    }/>
                </RadioGroup>
            </FormControl>

            <Box className={classes.delete} marginTop={'30px'}>
                <Typography fontWeight={600}>Delete project</Typography>
                <Typography fontSize={'14px'} style={{margin: '10px 0'}}>
                    Deleting the project will result in loss of all information including tasks,
                    discussions, files.
                </Typography>
                <Button disableRipple style={{marginLeft: '-8px'}}>Delete the project</Button>
            </Box>
        </Box>
    )
}

export default Status;