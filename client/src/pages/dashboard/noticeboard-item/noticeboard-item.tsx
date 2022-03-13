import React from 'react';
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Avatar from "@mui/material/Avatar";

const NoticeboardItem: React.FC = () => {

    return (
        <ListItem
            divider
            secondaryAction={<IconButton><HighlightOffIcon/></IconButton>}
        >
            <Box>
                <Typography fontSize={'14px'}>
                    <StarIcon
                        style={{
                            marginBottom: '-7px',
                            width: '20px',
                            color: '#f3c308',
                            marginRight: '10px'
                        }}
                    />
                    Tomorrow new year!!!
                </Typography>
                <Box display={'flex'} marginTop={'10px'} alignItems='center'>
                    <Avatar style={{width: '23px', height: '23px', marginRight: '10px'}}/>
                    <Typography fontSize={'12px'}>Avel Neytrowd - 2 Feb</Typography>
                </Box>
            </Box>
        </ListItem>
    );
};

export default NoticeboardItem;