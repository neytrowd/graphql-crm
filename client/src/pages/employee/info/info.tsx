import React from 'react';
import Box from "@mui/material/Box";
import {Button, FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {LocalizationProvider} from "@mui/lab";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import Typography from "@mui/material/Typography";

const Info: React.FC = () => {

    const [value, setValue] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };

    return (
        <Box style={{margin: '15px', padding: '15px', background: '#fff', borderRadius: '5px'}} maxWidth={'900px'}>
            <Box marginBottom={'35px'}>
                <Typography fontWeight={600}>Personal information</Typography>
            </Box>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <MobileDatePicker
                            label="Date of Birth"
                            inputFormat="dd/mm/yyyy"
                            value={value}
                            onChange={handleChange}
                            renderInput={
                                (params) => <TextField variant={'standard'} fullWidth {...params} />
                            }
                        />
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <FormControl variant="standard" sx={{width: '100%'}}>
                            <InputLabel id="demo-simple-select-standard-label">Marital status</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                value={'Medium'}
                                // onChange={handleChange}
                                label="Employment Status"
                            >
                                <MenuItem value={'Married'}>Married</MenuItem>
                                <MenuItem value={'Single'}>Single</MenuItem>
                                <MenuItem value={'Partnership'}>Partnership</MenuItem>
                                <MenuItem value={'Widowed'}>Widowed</MenuItem>
                                <MenuItem value={'Divorced'}>Divorced</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <Box margin={'25px 0'}>
                            <FormControl variant="standard" sx={{width: '100%'}}>
                                <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    value={'Medium'}
                                    // onChange={handleChange}
                                    label="Employment Status"
                                >
                                    <MenuItem value={'Male'}>Male</MenuItem>
                                    <MenuItem value={'Female'}>Female</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <Box margin={'25px 0'}>
                            <TextField
                                label="Phone"
                                variant="standard"
                                defaultValue={'99 123 45 67'}
                                fullWidth
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <TextField
                            label="City"
                            variant="standard"
                            defaultValue={'Nukus'}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <TextField
                            label="Language"
                            variant="standard"
                            defaultValue={'Russian'}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <Box margin={'25px 0'}>
                            <TextField
                                label="Postal code"
                                variant="standard"
                                defaultValue={'123456'}
                                fullWidth
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <Box margin={'25px 0'}>
                            <TextField
                                label="Country"
                                variant="standard"
                                defaultValue={'Uzbekistan'}
                                fullWidth
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} lg={12}>
                        <Box marginTop={'30px'} style={{textAlign: 'right'}}>
                            <Button variant={'contained'}>Save</Button>
                        </Box>
                    </Grid>
                </Grid>
            </LocalizationProvider>
        </Box>
    );
};

export default Info;