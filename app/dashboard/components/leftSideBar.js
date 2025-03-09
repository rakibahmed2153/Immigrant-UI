import React from 'react';
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import {MainListItems} from "@/app/dashboard/components/listItems";
import {ImmigrantListItems} from "@/app/dashboard/components/listImmigrant";
import {styled} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

const drawerWidth = 260;
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const LeftSideBar = (props) => {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <Drawer variant="permanent" open={open} className="leftMenu">
            <Divider />
            <List component="nav">
                {props.userType === "Professional"?
                    <MainListItems />:
                    props.userType === "Immigrant"?
                        <ImmigrantListItems />:
                        null
                }
                <Divider sx={{ my: 1 }} />
            </List>
        </Drawer>
    );
};

export default LeftSideBar;