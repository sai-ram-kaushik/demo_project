import { Button, Container, Paper, Input } from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { Typography } from "@mui/material";
import Switch from '@material-ui/core/Switch'
import './DemoCard.css'
import { margin } from "@mui/system";
const DemoCard = () => {
    return (
        <Container sx={{
            maxWidth: '600px',
        }}>
            <Paper sx={{
                padding: '1rem',
                margin: '1rem'
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
                margin: '1rem'
            }}>
                <div className="paper2">
                    <AccountCircleIcon fontSize="large" />
                    <Typography variant="h5" paddingLeft={3} className="account" >
                        Account Information
                    </Typography>
                </div>
                <div>
                    <img src="/images/Line 2.png" className="line" />
                </div>

                <div className="password">
                    <LockOpenOutlinedIcon fontSize="large" />
                    <Typography variant="h5" paddingLeft={3} className="account" >
                        Change your password
                    </Typography>
                </div>
                <div>
                    <img src="/images/Line 2.png" className="line" />
                </div>
                <div className="all">
                    <div>
                        <Typography variant="h5" paddingLeft={1} className="otherSettings" >
                            Other Settings
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h6" paddingLeft={1} className="browser" >
                            Clear Browser History
                        </Typography>
                    </div>
                    <div>
                        <img src="/images/Line 2.png" className="line" />
                    </div>
                    <div>
                        <Typography variant="h6" paddingLeft={1} className="browser" >
                            Pause my Search
                        </Typography>
                        <Switch color="primary" className="switch" />
                    </div>
                    <div>
                        <img src="/images/Line 2.png" className="line" />
                    </div>
                    <div>
                        <Typography variant="h6" paddingLeft={1} className="browser" >
                            Allow Spark India to access your location
                        </Typography>
                        <Switch color="primary" className="switch" />
                    </div>
                    <div>
                        <img src="/images/Line 2.png" className="line" />
                    </div>
                    <div>
                        <Typography variant="h6" paddingLeft={1} className="browser" >
                            Allow Spark India to access your Contacts
                        </Typography>
                        <Switch color="primary" className="switch" />

                    </div>
                    <div>
                        <img src="/images/Line 2.png" className="line" />
                    </div>
                    <div>
                        <Typography variant="h6" paddingLeft={1} className="browser" >
                            Allow Spark India to accessyour Microphone
                        </Typography>
                        <Switch color="primary" className="switch" />

                    </div>
                    <div>
                        <img src="/images/Line 2.png" className="line" />
                    </div>
                    <div>
                        <Typography variant="h6" paddingLeft={1} className="browser" >
                            Allow Spark India to accessyour Camera
                        </Typography>
                        <Switch color="primary" className="switch" />

                    </div>
                </div>
            </Paper>
        </Container>
    );
}

export default DemoCard;