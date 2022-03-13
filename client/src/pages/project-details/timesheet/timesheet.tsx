import React from "react";
import Box from "@mui/material/Box";
import styleTimesheet from "./styleTimesheet";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid'
import List from "@mui/material/List";
import TimesheetItem from "./timesheet-item";

const Timesheet: React.FC = () => {
    const classes = styleTimesheet()

    return (
        <Box className={classes.wrap}>
            <Box display={'flex'} justifyContent={'space-between'}>
                <Typography variant={'h5'}> Timesheet</Typography>
                <Button variant={'contained'}>Log time</Button>
            </Box>

            <Box margin={'20px 0'}>
                <Grid container spacing={{xs: 2, md: 3}}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Box className={`${classes.hours} ${classes.billable}`}>
                            <Typography>Billable</Typography>
                            <Box>
                                <Typography variant={'h5'} component={'span'}>2:00</Typography>
                                <Typography component={'span'}>hrs</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Box className={`${classes.hours}  ${classes.nonBill}`}>
                            <Typography>Non-Billable</Typography>
                            <Box>
                                <Typography variant={'h5'} component={'span'}>2:00</Typography>
                                <Typography component={'span'}>hrs</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Box className={`${classes.hours}  ${classes.total}`}>
                            <Typography>Total</Typography>
                            <Box>
                                <Typography variant={'h5'} component={'span'}>2:00</Typography>
                                <Typography component={'span'}>hrs</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <List>
                {[0, 1, 2, 3].map((value) => (
                    <TimesheetItem key={value} value={value}/>
                ))}
            </List>
        </Box>
    )
}

export default Timesheet;