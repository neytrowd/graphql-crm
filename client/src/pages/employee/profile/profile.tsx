import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Avatar, Button, FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CameraIcon from "@mui/icons-material/Camera";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import styleProfile from "./styleProfile";

import {Editor} from "react-draft-wysiwyg";
import {EditorState} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Profile: React.FC = () => {
    const classes = styleProfile();

    const [value, setValue] = useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };

    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    useEffect(() => {
        console.log(editorState);
    }, [editorState]);


    return (
        <Box style={{margin: '15px', padding: '15px', background: '#fff', borderRadius: '5px'}} maxWidth={'900px'}>
            <Box marginBottom={'35px'}>
                <Typography fontWeight={600}>Profile Details</Typography>
            </Box>

            <Box display={'flex'} alignItems={'center'} gap={'30px'} marginBottom={'30px'}>
                <Box className={classes.avatar}>
                    <Avatar className={classes.avatarPhoto}/>
                    <IconButton className={classes.avatarChange}>
                        <CameraIcon className={classes.avatarIcon}/>
                    </IconButton>
                </Box>

                <Box flex='1'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={6}>
                            <TextField
                                label="Firstname"
                                variant="standard"
                                defaultValue={'Avel'}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField
                                label="Lastname"
                                variant="standard"
                                defaultValue={'Neytrowd'}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12} lg={4}>
                    <Box margin={'25px 0'}>
                        <TextField
                            label="Email"
                            variant="standard"
                            defaultValue={'abc@gmail.com'}
                            fullWidth
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} lg={4}>
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

                <Grid item xs={12} lg={4}>
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

                <Grid item xs={12} lg={12}>
                    <Typography color={'rgba(0, 0, 0, 0.6)'} fontSize={'14px'}>Bio</Typography>
                    <Editor
                        editorState={editorState}
                        wrapperStyle={{borderBottom: '1px solid #949494'}}
                        onEditorStateChange={setEditorState}
                    />
                    {/*<TextField*/}
                    {/*    label="Bio" rows={3} multiline variant="standard"*/}
                    {/*    fullWidth name='name'*/}
                    {/*    defaultValue={'This is a Sample Project. This is to get you acquainted with what you can do with TeamWave'}*/}
                    {/*/>*/}
                </Grid>

                <Grid item xs={12} lg={12}>
                    <Box margin={'25px 0'}>
                        <Typography color={'rgba(0, 0, 0, 0.6)'} fontSize={'14px'}>Job description</Typography>
                        <Editor
                            wrapperStyle={{borderBottom: '1px solid #949494'}}
                            editorState={editorState}
                            onEditorStateChange={setEditorState}
                        />
                        {/*<TextField*/}
                        {/*    label="Job description" rows={3} multiline variant="standard"*/}
                        {/*    fullWidth name='name'*/}
                        {/*    defaultValue={'This is a Sample Project. This is to get you acquainted with what you can do with TeamWave'}*/}
                        {/*/>*/}
                    </Box>
                </Grid>

                <Grid item xs={12} lg={4}>
                    <FormControl variant="standard" sx={{width: '100%'}}>
                        <InputLabel id="demo-simple-select-standard-label">Employment Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            value={'Medium'}
                            // onChange={handleChange}
                            label="Employment Status"
                        >
                            <MenuItem value={'Employed'}>Employed</MenuItem>
                            <MenuItem value={'Resigned'}>Resigned</MenuItem>
                            <MenuItem value={'Terminated'}>Terminated</MenuItem>
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

export default Profile;