import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

export default function VolunteerRightBar() {
    return (
        <Box flex={2} p={2} pt={5} display="flex" justifyContent="center">
            <Box position="fixed" alignItems="center">
                <Typography variant="h6" fontWeight={300}>Activities</Typography>

                <Box bgcolor="white" boxShadow={3}>
                    <List>
                        <ListItem>
                            {/* <ListItemAvatar>
                                <Avatar />
                            </ListItemAvatar> */}
                            <ListItemText
                                primary="Donated Blood"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Ali Connors
                                        </Typography>
                                        {" — 23rd April 2022"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            {/* <ListItemAvatar>
                                <Avatar />
                            </ListItemAvatar> */}
                            <ListItemText
                                primary="Donated Rs. 20"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Red Cross
                                        </Typography>
                                        {" — To create school in Karnali"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>

                        <ListItem>
                            {/* <ListItemAvatar>
                                <Avatar />
                            </ListItemAvatar> */}
                            <ListItemText
                                primary="Volunteered"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Leo's Club
                                        </Typography>
                                        {" — Dharahara Cleaning Program"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            {/* <ListItemAvatar>
                                <Avatar />
                            </ListItemAvatar> */}
                            <ListItemText
                                primary="Volunteered"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Leo's Club
                                        </Typography>
                                        {" — Dharahara Cleaning Program"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>

                </Box>

            </Box>
        </Box>
    );
}
