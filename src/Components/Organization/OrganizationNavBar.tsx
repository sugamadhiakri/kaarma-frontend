import styled from '@emotion/styled';
import { Notifications } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';

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
export const OrganizationNavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6">ORGANIZATION</Typography>
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
                sx={{
                    marginTop: 5
                }}
                onClose={() => setOpen(false)}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Log out</MenuItem>
            </Menu>
        </AppBar>
    );
};
