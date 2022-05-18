import { AccountBox, Bloodtype, CorporateFare, Paid, VolunteerActivism } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

export const OrganizationSideBar = () => {
    return (
        <Box flex={1} p={2} pt={5}>
            <Box position="fixed" >
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountBox />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <VolunteerActivism />
                            </ListItemIcon>
                            <ListItemText primary="Volunteers" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Paid />
                            </ListItemIcon>
                            <ListItemText primary="Fundraisers" />
                        </ListItemButton>
                    </ListItem>
                </List>

            </Box>
        </Box>
    );
};
