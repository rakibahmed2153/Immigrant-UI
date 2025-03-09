import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CommentBank from '@mui/icons-material/CommentBank';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import List from "@mui/material/List";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PaymentIcon from '@mui/icons-material/Payment';

export const ImmigrantListItems = () => {
    const [isSubOptionsOpen, setIsSubOptionsOpen] = React.useState(false);
    const [isPaymentSubOption, setIsPaymentSubOption] = React.useState(false);
    const [isSubProfile, setIsSubProfile] = React.useState(false);


    const SubOptions = () => {
        return (
            <List component="div" disablePadding>
                <ListItemButton>
                    <ListItemIcon style={{minWidth: '35px'}}>
                        {/*<FiberManualRecordIcon />*/}
                    </ListItemIcon>
                    <ListItemText className="fontStyle" primary="MyGoal" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon style={{minWidth: '35px'}}>
                        {/*<FiberManualRecordIcon />*/}
                    </ListItemIcon>
                    <ListItemText className="fontStyle" primary="MyUnimo" />
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
                    <ListItemText className="fontStyle" primary="Invoice" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon style={{minWidth: '35px'}}>
                        {/*<FiberManualRecordIcon />*/}
                    </ListItemIcon>
                    <ListItemText className="fontStyle" primary="Platform" />
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
                    <ListItemText className="fontStyle" primary="Upload Document" />
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
                    <ListItemText className="fontStyle" primary="Family Member" />
                </ListItemButton>
            </List>
        );
    };

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
            <ListItemText className="fontStyle" primary="MyUnimo" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon style={{minWidth: '35px'}}>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText className="fontStyle" primary="immiAI" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon style={{minWidth: '35px'}}>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText className="fontStyle" primary="Service" />
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
)};