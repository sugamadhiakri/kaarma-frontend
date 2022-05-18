import styled from '@emotion/styled';
import { EmojiEvents, EmojiPeople, EventBusy, ExpandMore, Festival, MoreVert, PeopleAlt, Event, LocationOn } from '@mui/icons-material';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Icon, IconButton, List, ListItem, ListItemIcon, ListItemText, Modal, Typography } from '@mui/material';
import GoogleMapReact from 'google-map-react';

import React, { useState } from 'react';

export const FundraiserProgramme = () => {
    return (
        <Card sx={{
            margin: 5,
            boxShadow: 5
        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        R
                    </Avatar>
                }

                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }

                title="Red Cross Society"
                subheader="September-14, 2016"
            />

            <Box display="flex" flexDirection="row">
                <CardMedia
                    component="img"
                    height="300px"
                    image="https://nrcs.org/wp-content/uploads/2020/04/Hand-washing-place-installe-with-covid-19-awarness-mesage-at-Belaka-2.jpg"
                    alt="Paella Dish"
                    sx={{
                        flex: 1
                    }}
                />
                <CardContent sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    paddingTop: 0,
                    flex: 1
                }} >
                    <Box>
                        <Typography variant="h6">Raising Funds for Kidney Patient, Balram</Typography>
                        <Typography variant="body2" color="text.secondary">Ratnanagar-12, Chitwan</Typography>
                        <Divider />
                    </Box>
                    <Box>

                    </Box>
                    <Box>
                        <Box display="flex" flexDirection="row-reverse">
                            <CardActions disableSpacing>
                                {/* <IconButton>
                                    <Typography>Expand</Typography>
                                    <ExpandMore />
                                </IconButton> */}
                                <Button variant="contained">Donate</Button>
                            </CardActions>
                        </Box>
                    </Box>
                </CardContent >
            </Box >
        </Card >

    );
};


