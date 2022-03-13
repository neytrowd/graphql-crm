import React from "react";
import {Timeline as TimelineWrap} from "@mui/lab";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styleStream from "./styleStream";
import StreamItem from "../stream-item";

const Stream: React.FC = () => {
    const classes = styleStream();

    return (
        <Box className={classes.wrap}>
            <Box marginBottom={'35px'}>
                <Typography fontWeight={600}>Activity Stream</Typography>
            </Box>

            <TimelineWrap style={{padding: '0'}}>
                <StreamItem/>
                <StreamItem/>
                <StreamItem/>

                <TimelineItem>
                    <TimelineOppositeContent className={classes.timeDots} sx={{m: 'auto 0'}} variant="body2"/>
                    <TimelineSeparator>
                        <TimelineConnector/><TimelineDot/><TimelineConnector/>
                    </TimelineSeparator>
                </TimelineItem>
            </TimelineWrap>
        </Box>
    )
}

export default Stream;