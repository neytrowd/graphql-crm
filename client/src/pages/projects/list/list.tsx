import React from "react";
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import ListItem from "../list-item";

const List: React.FC = () => {

    return (
        <Box padding={'20px'}>
            <Grid container spacing={{xs: 2, md: 3}}>
                {Array.from(Array(5)).map((_, index) => (
                    <ListItem key={index}/>
                ))}
            </Grid>
        </Box>
    )
}

export default List;