import React from 'react'
import {
    LightModeOutlined, 
    DarkModeOutlined, 
    Menu as MenuIcon, 
    Search, 
    SettingsOutlined,
    ArrowDropDownOutlined 
} from '@mui/icons-material';
import FlexBetween from 'components/FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import profileImage from "assets/profile.jpeg";
import { AppBar,IconButton,InputBase,Toolbar, useTheme } from '@mui/material';
import App from 'App';


const Navbar = ({
    isSidebarOpen,
    setIsSidebarOpen,
}) => {
    const dispatch = useDispatch();
    const theme = useTheme();

    return <AppBar
    sx = {{
        position: "static",
        background: "none",
        boxShadow: "none",
    }}
    >

    <Toolbar sx={{justifyContent: "space-between"}}>
        {/* LEFT SIDE */}
        <FlexBetween>
            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <MenuIcon />
            </IconButton>
            <FlexBetween
                backgroundColor={theme.palette.background.alt}
                borderRadius="9px"
                gap="3rem"
                padding="0.1rem 1.5rem"
            >
                <InputBase placeholder='Search...' />
                <IconButton>
                    <Search />
                </IconButton>
            </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
            <IconButton onClick={()=> dispatch(setMode())} >
                {
                    theme.palette.mode === "dark" ?
                    (<DarkModeOutlined sx={{fontSize: "25ps"}} />) :
                    (<LightModeOutlined sx={{fontSize: "25ps"}} />)
                }
            </IconButton>
            <IconButton>
                <SettingsOutlined sx={{fontSize: "25ps"}} />
            </IconButton>
        </FlexBetween>
    </Toolbar>
    </AppBar>
}

export default Navbar