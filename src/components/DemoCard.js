import { Button, Container, Paper, Input } from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Typography } from "@mui/material";
import './DemoCard.css'
import { margin } from "@mui/system";
const DemoCard = () =>{
    return(
        <Container sx={{
            maxWidth: '600px',
        }}>
            <Paper sx={{
                padding: '1rem',
                margin: '3rem'
            }}>
                <Button className="backArrow">
                <ArrowBackOutlinedIcon />
                </Button>
                <Typography variant="h5" className="typography">
                    Privacy Settings
                </Typography>
            </Paper>

            <Paper sx={{
                padding: '1rem',
                margin: '3rem'
            }}>
                hello
            </Paper>
        </Container>
    );
}

export default DemoCard;