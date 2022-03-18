import { Button, Container, Paper, Input } from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Typography } from "@mui/material";
import './DemoCard.css'
import { margin } from "@mui/system";
const DemoCard = () => {
    return (
        <Container sx={{
            maxWidth: '600px',
        }}>
            <Paper sx={{
                padding: '1rem',
                margin: '3rem'
            }}>
                <div className="flex">
                <Button>
                    <ArrowBackOutlinedIcon color="primary" fontSize="large" />
                </Button>
                    <Typography variant="h5" className="typography">
                        Privacy Settings
                    </Typography>
                </div>

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