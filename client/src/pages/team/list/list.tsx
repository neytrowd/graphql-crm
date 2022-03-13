import React from "react";
import {Divider, Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import ListItem from "../list-item";

const List: React.FC = () => {

    return (
        <Box padding={'20px'}>
            <Box>
                <Typography>
                    Full time
                </Typography>
                <Divider style={{margin: '20px 0'}}/>
            </Box>

            <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12, lg: 12}}>
                {Array.from(Array(12)).map((_, index) => (
                    <ListItem key={index}/>
                ))}
            </Grid>
        </Box>
    )
}

export default List;