import { AccountBox, Bloodtype, CorporateFare, Home, Paid, VolunteerActivism } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import React from 'react';

export default function VolunteerSideBar() {
    return (
        <Box flex={1} p={2}>
            <Box position="fixed">
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
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CorporateFare />
                            </ListItemIcon>
                            <ListItemText primary="Organizations" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Bloodtype />
                            </ListItemIcon>
                            <ListItemText primary="Get Blood" />
                        </ListItemButton>
                    </ListItem>
                </List>

            </Box>
        </Box>
    );
}
