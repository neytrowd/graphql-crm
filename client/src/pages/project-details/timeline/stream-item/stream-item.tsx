import React from 'react';
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import TimelineContent from "@mui/lab/TimelineContent";
import styleStreamItem from "./styleStreamItem";

const StreamItem: React.FC = () => {
    const classes = styleStreamItem();

    return (
        <>
            <TimelineItem>
                <TimelineOppositeContent className={classes.timeDots} sx={{m: 'auto 0'}} variant="body2">
                    <Typography fontSize={'13px'} fontWeight={600}>February 22</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent className={classes.time} sx={{m: 'auto 0'}} variant="body2">
                    9:30 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color="success"><LaptopMacIcon/></TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}} className={classes.timeContent}>
                    <Typography fontSize={'14px'} fontWeight={600}> Avel Neytrowd added a task</Typography>
                    <Typography fontSize={'14px'}>Complete current task</Typography>
                </TimelineContent>
            </TimelineItem>
        </>
    );
};

export default StreamItem;