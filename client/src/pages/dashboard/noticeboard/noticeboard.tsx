import React, {useState} from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Checkbox from "@mui/material/Checkbox";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import FormControlLabel from '@mui/material/FormControlLabel'
import NoticeboardItem from "../noticeboard-item";

const Noticeboard: React.FC = () => {
    const [showForm, setShowForm] = useState(false)

    return (
        <Box padding={'20px'} style={{background: '#fff', borderRadius: '5px'}}>
            <Box marginBottom={'30px'} display='flex' justifyContent='space-between'>
                <Typography fontWeight={600}>Noticeboard</Typography>
                {!showForm && (
                    <Button
                        size={'small'}
                        variant={'contained'}
                        onClick={() => setShowForm(!showForm)}
                    >
                        New Post
                    </Button>
                )}
            </Box>

            {showForm && (
                <>
                    <Box display='flex' gap='20px' marginBottom='20px'>
                        <Avatar style={{width: '40px', height: '40px'}}/>
                        <TextField
                            variant="outlined" multiline rows={4} fullWidth
                            name='aboutMe' placeholder='Write your message here...'
                        />
                    </Box>

                    <Box paddingLeft='20px' display='flex' justifyContent='space-between' alignItems='center'>
                        <FormControlLabel control={<Checkbox size='small'/>} label="Important"/>
                        <Box>
                            <Button
                                variant={'outlined'} size={'small'} color={'primary'}
                                onClick={() => setShowForm(!showForm)}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant={'contained'} size={'small'}
                                style={{marginLeft: '15px'}}
                            >
                                Post
                            </Button>
                        </Box>
                    </Box>
                </>
            )}

            <Box marginTop='10px'>
                <List>
                    {[0, 1, 2, 3].map((value) => (
                        <NoticeboardItem key={value}/>
                    ))}
                </List>
            </Box>
        </Box>
    )
}

export default Noticeboard;