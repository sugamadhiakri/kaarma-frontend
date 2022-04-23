import { AppBar, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/styles';
import { theme } from '../../theme';
import React, { useState } from 'react';
import { Mail, Notifications } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "5px",
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px"
}));

export default function VolunteerNavBar() {

    const [open, setOpen] = useState(false);

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6">VOLUNTEER</Typography>
                <Search><InputBase placeholder="Search" /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar onClick={() => setOpen(true)} />
                </Icons>
            </StyledToolbar>
            <Menu
                id="positioned-menu"
                aria-labelledby="button-positioned-menu"
                open={open}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                onClose={() => setOpen(false)}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Log out</MenuItem>
            </Menu>
        </AppBar>
    );
}
