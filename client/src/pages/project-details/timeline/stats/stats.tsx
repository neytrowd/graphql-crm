import React from "react";
import Box from "@mui/material/Box";
import {Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,} from 'chart.js';
import {Line} from 'react-chartjs-2';
import dataset from "./dataset";
import Typography from "@mui/material/Typography";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Stats: React.FC = () => {

    return (
        <Box style={{padding: '15px', background: '#fff', borderRadius: '5px'}}>
            <Box marginBottom={'25px'}>
                <Typography fontWeight={600}>Task Stats</Typography>
            </Box>

            <Line
                style={{minHeight: '200px'}}
                data={dataset}
                options={{
                    scales: {
                        y: {
                            beginAtZero: true,
                        }
                    }
                }}
            />
        </Box>
    )
}

export default Stats;