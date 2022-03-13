import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import {Avatar, Button, FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import styleDetails from "./styleDetails";
import IconButton from "@mui/material/IconButton";
import CameraIcon from '@mui/icons-material/Camera';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker'

const Details: React.FC = () => {
    const classes = styleDetails();

    const [value, setValue] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };

    return (
        <Box className={classes.wrap}>
            <Typography fontWeight={600}>Project Details</Typography>

            <Box display={'flex'} alignItems={'center'} gap={'30px'} margin={'30px 0'}>
                <Box className={classes.avatar}>
                    <Avatar className={classes.avatarPhoto}/>
                    <IconButton className={classes.avatarChange}>
                        <CameraIcon className={classes.avatarIcon}/>
                    </IconButton>
                </Box>

                <Box flex='1'>
                    <TextField
                        label="Project name"
                        variant="standard"
                        defaultValue={'Enigma'}
                        fullWidth
                    />
                </Box>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12} lg={12}>
                    <TextField
                        label="Project description" rows={3} multiline variant="standard"
                        fullWidth name='name'
                        defaultValue={'This is a Sample Project. This is to get you acquainted with what you can do with TeamWave'}
                    />
                </Grid>

                <Grid item xs={12} lg={6}>
                    <Box margin={'25px 0'}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <MobileDatePicker
                                label="Start date"
                                inputFormat="dd/mm/yyyy"
                                value={value}
                                onChange={handleChange}
                                renderInput={
                                    (params) => <TextField variant={'standard'} fullWidth {...params} />
                                }
                            />
                        </LocalizationProvider>
                    </Box>
                </Grid>

                <Grid item xs={12} lg={6}>
                    <Box margin={'25px 0'}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <MobileDatePicker
                                label="End date"
                                inputFormat="dd/mm/yyyy"
                                value={value}
                                onChange={handleChange}
                                renderInput={
                                    (params) => <TextField variant={'standard'} fullWidth {...params} />
                                }
                            />
                        </LocalizationProvider>
                    </Box>
                </Grid>

                <Grid item xs={12} lg={4}>
                    <TextField
                        label="Estimate time"
                        type="number"
                        fullWidth
                        variant="standard"
                        defaultValue={10}
                    />
                </Grid>

                <Grid item xs={12} lg={4}>
                    <TextField
                        label="Estimate cost"
                        type="number"
                        fullWidth
                        variant="standard"
                        defaultValue={15}
                    />
                </Grid>

                <Grid item xs={12} lg={4}>
                    <FormControl variant="standard" sx={{width: '100%'}}>
                        <InputLabel id="demo-simple-select-standard-label">Project priority</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            value={'Medium'}
                            // onChange={handleChange}
                            label="Project priority"
                        >
                            <MenuItem value={'Low'}>Low</MenuItem>
                            <MenuItem value={'Medium'}>Medium</MenuItem>
                            <MenuItem value={'High'}>High</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} lg={12}>
                    <Box marginTop={'30px'} style={{textAlign: 'right'}}>
                        <Button variant={'contained'}>Save</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Details;