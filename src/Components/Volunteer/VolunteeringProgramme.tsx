import styled from '@emotion/styled';
import { EmojiEvents, EmojiPeople, EventBusy, ExpandMore, Festival, MoreVert, PeopleAlt, Event, LocationOn } from '@mui/icons-material';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Icon, IconButton, List, ListItem, ListItemIcon, ListItemText, Modal, Typography } from '@mui/material';
import GoogleMapReact from 'google-map-react';

import React, { useState } from 'react';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const StyledList = styled(List)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
    flex: 1,
});

const location = {
    address: "Ratnanagar-12, Chitwan",
    lat: 27.2046,
    lng: 77.4977
};

const LocationPin = (props: any) => (
    <div className="pin"></div>
);

export const VolunteeringProgramme = () => {

    const MAPS_API = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";
    console.log(MAPS_API);
    console.log(process.env);
    const [open, setOpen] = useState(false);

    const handleApiLoaded = (map: any, maps: any) => {
        new maps.Marker({
            position: location,
            map,
            title: "here"
        });
    };

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
                />
                <CardContent sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    paddingTop: 0,
                }} >
                    <Box>
                        <Typography variant="h6">Book Distrubution Program in Dumri Chowk kirana pasal</Typography>
                        <Typography variant="body2" color="text.secondary">Ratnanagar-12, Chitwan</Typography>
                        <Divider />
                        <Typography variant="body2" color="text.secondary">0/20 applied</Typography>
                        <Typography variant="body2" color="text.primary" mt={2}>
                            This is the random text thrown here and there for the comport of the people and their well being so darling what
                            Will you do to us...
                        </Typography>
                    </Box>
                    <Box>
                        <Box display="flex" flexDirection="row-reverse">
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favourites" onClick={() => setOpen(true)}>
                                    <Typography>Expand</Typography>
                                    <ExpandMore />
                                </IconButton>
                            </CardActions>
                            <StyledModal
                                open={open}
                                onClose={() => setOpen(false)}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box width="50%" height="95%" bgcolor="white" p={3} borderRadius="20px" overflow="scroll" sx={{
                                    "&::-webkit-scrollbar": {
                                        width: 0
                                    }
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
                                    <Box display="flex" flexDirection="column" p={2}>

                                        <CardContent sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            paddingLeft: 0,
                                            paddingRight: 0
                                        }} >
                                            <Typography variant="h6">Book Distrubution Program in Dumri Chowk kirana pasal</Typography>
                                            {/* <Typography variant="body2" color="text.secondary">Ratnanagar-12, Chitwan</Typography> */}
                                            <Divider />
                                            {/* <Typography variant="body2" color="text.secondary">0/20 applied</Typography> */}


                                        </CardContent>


                                        <Box mt={1} display="flex" flexDirection="row" justifyContent="space-between">
                                            <Box flex={3}>
                                                <CardMedia
                                                    sx={{
                                                        padding: 1,
                                                    }}
                                                    component="img"
                                                    height="300px"
                                                    image="https://nrcs.org/wp-content/uploads/2020/04/Hand-washing-place-installe-with-covid-19-awarness-mesage-at-Belaka-2.jpg"
                                                    alt="Paella Dish"
                                                />
                                            </Box>

                                            <Box flex={2} display="flex" flexDirection="row" p={2}>


                                                <StyledList>
                                                    <ListItem disablePadding>
                                                        <ListItemIcon>
                                                            <PeopleAlt />
                                                        </ListItemIcon>
                                                        <ListItemText primary="50" secondary="Volunteers Required" />
                                                    </ListItem>

                                                    <ListItem disablePadding>
                                                        <ListItemIcon>
                                                            <Festival />
                                                        </ListItemIcon>
                                                        <ListItemText primary="100xp" secondary="Experience Required" />
                                                    </ListItem>


                                                    <ListItem disablePadding>
                                                        <ListItemIcon>
                                                            <EventBusy />
                                                        </ListItemIcon>
                                                        <ListItemText primary="20th April 2022" secondary="Application Deadline" />
                                                    </ListItem>
                                                </StyledList>

                                                <StyledList>
                                                    <ListItem disablePadding>
                                                        <ListItemIcon>
                                                            <EmojiPeople />
                                                        </ListItemIcon>
                                                        <ListItemText primary="50" secondary="Applicants" />
                                                    </ListItem>
                                                    <ListItem disablePadding>
                                                        <ListItemIcon>
                                                            <EmojiEvents />
                                                        </ListItemIcon>
                                                        <ListItemText primary="15xp" secondary="Reward Points" />
                                                    </ListItem>
                                                    <ListItem disablePadding>
                                                        <ListItemIcon>
                                                            <Event />
                                                        </ListItemIcon>
                                                        <ListItemText primary="22th April 2022" secondary="Event Day" />
                                                    </ListItem>
                                                </StyledList>


                                            </Box>
                                        </Box>

                                        <Typography variant="body2" color="text.primary" mt={2}>
                                            This is the random text thrown here and there for the comport of the people and their well being so darling what
                                            Will you do to us... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eos iusto quo modi earum, maiores quod minima beatae! Ex sit praesentium aliquam blanditiis voluptate nulla fuga aliquid quia nesciunt laboriosam!
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, quis. Officia ab, laboriosam veniam ea quia quos iusto repudiandae earum nostrum ex laborum cum reiciendis optio repellendus atque accusamus error?
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil nemo consequatur, veritatis voluptates cum esse architecto. Ex harum magnam aliquam aperiam? Ea nihil natus deleniti quo itaque sapiente nulla cupiditate?
                                        </Typography>
                                        <Typography variant="body2" color="text.primary" mt={2}>
                                            This is the random text thrown here and there for the comport of the people and their well being so darling what
                                            Will you do to us... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eos iusto quo modi earum, maiores quod minima beatae! Ex sit praesentium aliquam blanditiis voluptate nulla fuga aliquid quia nesciunt laboriosam!
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, quis. Officia ab, laboriosam veniam ea quia quos iusto repudiandae earum nostrum ex laborum cum reiciendis optio repellendus atque accusamus error?
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil nemo consequatur, veritatis voluptates cum esse architecto. Ex harum magnam aliquam aperiam? Ea nihil natus deleniti quo itaque sapiente nulla cupiditate?
                                        </Typography>
                                        <Typography variant="body2" color="text.primary" mt={2}>
                                            This is the random text thrown here and there for the comport of the people and their well being so darling what
                                            Will you do to us... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eos iusto quo modi earum, maiores quod minima beatae! Ex sit praesentium aliquam blanditiis voluptate nulla fuga aliquid quia nesciunt laboriosam!
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, quis. Officia ab, laboriosam veniam ea quia quos iusto repudiandae earum nostrum ex laborum cum reiciendis optio repellendus atque accusamus error?
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil nemo consequatur, veritatis voluptates cum esse architecto. Ex harum magnam aliquam aperiam? Ea nihil natus deleniti quo itaque sapiente nulla cupiditate?
                                        </Typography>
                                        <Box height="500px" width="100%" marginTop={5}>
                                            <GoogleMapReact
                                                bootstrapURLKeys={{ key: MAPS_API, }}
                                                defaultCenter={location}
                                                defaultZoom={15}
                                                yesIWantToUseGoogleMapApiInternals={true}
                                                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                                            >
                                                <LocationPin
                                                    lat={location.lat}
                                                    lng={location.lng}
                                                    text={location.address}
                                                />
                                            </GoogleMapReact>
                                        </Box>

                                    </Box>
                                    <Box display="flex" justifyContent="center" alignItems="center" marginTop={2}>
                                        <Button variant='contained' size='large'>Apply</Button>
                                    </Box>
                                </Box>
                            </StyledModal>
                        </Box>
                    </Box>
                </CardContent >
            </Box >
        </Card >

    );
};


