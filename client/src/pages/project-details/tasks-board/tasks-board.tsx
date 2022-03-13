import React, {useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import styleTaskBoard from "./styleTaskBoard";
import AddIcon from '@mui/icons-material/Add';

interface IForms {
    [key: string]: boolean,
}

const TasksBoard: React.FC = () => {
    const classes = styleTaskBoard();

    const [forms, setForms] = useState<IForms>({
        planned: false,
        todo: false,
        inProcess: false,
        completed: false
    })

    const showHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const {name} = e.target as HTMLButtonElement;
        setForms((prev) => ({
            ...prev,
            [name]: !prev[name]
        }))
    }

    return (
        <Box className={classes.tasks}>
            <Grid container spacing={{xs: 2, md: 3}}>
                <Grid item xs={4} sm={4} md={3} lg={3}>
                    <Typography fontWeight={600}>Planned</Typography>
                    <Box marginTop={'15px'}>
                        <Button
                            fullWidth
                            className={classes.button}
                            onClick={showHandler}
                            name='planned'
                            disableRipple
                        >
                            <AddIcon/>
                        </Button>

                        {forms.planned && (
                            <Box className={classes.form}>
                                <TextField size={'small'} fullWidth placeholder={'Task title...'}/>
                                <Box paddingTop={'10px'}>
                                    <Button variant={'contained'} size={'small'}>Add</Button>
                                </Box>
                            </Box>
                        )}
                    </Box>
                    <Box>

                    </Box>
                </Grid>

                <Grid item xs={4} sm={4} md={3} lg={3}>
                    <Typography fontWeight={600}>To Do</Typography>
                    <Box marginTop={'15px'}>
                        <Button
                            fullWidth
                            className={classes.button}
                            onClick={showHandler}
                            name='todo'
                            disableRipple
                        >
                            <AddIcon/>
                        </Button>

                        {forms.todo && (
                            <Box className={classes.form}>
                                <TextField size={'small'} fullWidth placeholder={'Task title...'}/>
                                <Box paddingTop={'10px'}>
                                    <Button variant={'contained'} size={'small'}>Add</Button>
                                </Box>
                            </Box>
                        )}
                    </Box>
                    <Box>

                    </Box>
                </Grid>

                <Grid item xs={4} sm={4} md={3} lg={3}>
                    <Typography fontWeight={600}>In Process</Typography>
                    <Box marginTop={'15px'}>
                        <Button
                            fullWidth
                            className={classes.button}
                            onClick={showHandler}
                            name='inProcess'
                            disableRipple
                        >
                            <AddIcon/>
                        </Button>

                        {forms.inProcess && (
                            <Box className={classes.form}>
                                <TextField size={'small'} fullWidth placeholder={'Task title...'}/>
                                <Box paddingTop={'10px'}>
                                    <Button variant={'contained'} size={'small'}>Add</Button>
                                </Box>
                            </Box>
                        )}
                    </Box>
                    <Box>

                    </Box>
                </Grid>

                <Grid item xs={4} sm={4} md={3} lg={3}>
                    <Typography fontWeight={600}>Completed</Typography>
                    <Box marginTop={'15px'}>
                        <Button
                            fullWidth
                            className={classes.button}
                            onClick={showHandler}
                            name='completed'
                            disableRipple
                        >
                            <AddIcon/>
                        </Button>

                        {forms.completed && (
                            <Box className={classes.form}>
                                <TextField size={'small'} fullWidth placeholder={'Task title...'}/>
                                <Box paddingTop={'10px'}>
                                    <Button variant={'contained'} size={'small'}>Add</Button>
                                </Box>
                            </Box>
                        )}
                    </Box>
                    <Box>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TasksBoard;