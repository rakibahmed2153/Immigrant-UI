import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BarChartIcon from '@mui/icons-material/BarChart';
import CommentBankIcon from '@mui/icons-material/CommentBank';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CommentBank from '@mui/icons-material/CommentBank';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PaymentIcon from "@mui/icons-material/Payment";


const SubOptions = () => {
    return (
        <List component="div" disablePadding>
            <ListItemButton>
                <ListItemIcon style={{minWidth: '35px'}}>
                    {/*<FiberManualRecordIcon />*/}
                </ListItemIcon>
                <ListItemText className="fontStyle" primary="MyService" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon style={{minWidth: '35px'}}>
                    {/*<FiberManualRecordIcon />*/}
                </ListItemIcon>
                <ListItemText className="fontStyle" primary="MyUnimo" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon style={{minWidth: '35px'}}>
                    {/*<FiberManualRecordIcon />*/}
                </ListItemIcon>
                <ListItemText className="fontStyle" primary="Team" />
            </ListItemButton>
        </List>
    );
};

const SubOptionsPayment = () => {
    return (
        <List component="div" disablePadding>
            <ListItemButton>
                <ListItemIcon style={{minWidth: '35px'}}>
                    {/*<FiberManualRecordIcon />*/}
                </ListItemIcon>
                <ListItemText className="fontStyle" primary="View Invoice" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon style={{minWidth: '35px'}}>
                    {/*<FiberManualRecordIcon />*/}
                </ListItemIcon>
                <ListItemText className="fontStyle" primary="Manage Invoice" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon style={{minWidth: '35px'}}>
                    {/*<FiberManualRecordIcon />*/}
                </ListItemIcon>
                <ListItemText className="fontStyle" primary="Platform Subscription" />
            </ListItemButton>
        </List>
    );
};

const SubProfile = () => {
    return (
        <List component="div" disablePadding>
            <ListItemButton>
                <ListItemIcon style={{minWidth: '35px'}}>
                    {/*<FiberManualRecordIcon />*/}
                </ListItemIcon>
                <ListItemText className="fontStyle" primary="My Story" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon style={{minWidth: '35px'}}>
                    {/*<FiberManualRecordIcon />*/}
                </ListItemIcon>
                <ListItemText className="fontStyle" primary="Edit Profile" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon style={{minWidth: '35px'}}>
                    {/*<FiberManualRecordIcon />*/}
                </ListItemIcon>
                <ListItemText className="fontStyle" primary="View Profile" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon style={{minWidth: '35px'}}>
                    {/*<FiberManualRecordIcon />*/}
                </ListItemIcon>
                <ListItemText className="fontStyle" primary="Profile View Allow" />
            </ListItemButton>
        </List>
    );
};

export const MainListItems = () => {
    const [isSubOptionsOpen, setIsSubOptionsOpen] = React.useState(false);
    const [isPaymentSubOption, setIsPaymentSubOption] = React.useState(false);
    const [isSubProfile, setIsSubProfile] = React.useState(false);

    return (
        <React.Fragment>
            <ListItemButton>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText className="fontStyle" primary="Dashboard" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <CommentBank />
                </ListItemIcon>
                <ListItemText className="fontStyle" primary="immiAI" />
            </ListItemButton>

            <ListItemButton onClick={()=> setIsSubOptionsOpen(!isSubOptionsOpen)}>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText className="fontStyle" primary="Manage" />
                {isSubOptionsOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </ListItemButton>

            {isSubOptionsOpen && <SubOptions />}

            <ListItemButton onClick={()=> setIsPaymentSubOption(!isPaymentSubOption)}>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <PaymentIcon />
                </ListItemIcon>
                <ListItemText className="fontStyle" primary="Payment" />
                {isPaymentSubOption? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </ListItemButton>

            {isPaymentSubOption && <SubOptionsPayment />}

            <ListItemButton>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText className="fontStyle" primary="Business Organization" />
            </ListItemButton>

            <ListItemButton onClick={()=> setIsSubProfile(!isSubProfile)}>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText className="fontStyle" primary="Profile" />
                {isSubProfile ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </ListItemButton>

            {isSubProfile && <SubProfile />}

            <ListItemButton>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText className="fontStyle" primary="Communication Channel" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <HelpOutlineIcon />
                </ListItemIcon>
                <ListItemText className="fontStyle" primary="F.A.Q" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon style={{minWidth: '35px'}}>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText className="fontStyle" primary="Open Ticket" />
            </ListItemButton>
        </React.Fragment>
    );
};
