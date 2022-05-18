import { CameraAlt } from '@mui/icons-material';
import { Button, Divider, FormControlLabel, MenuItem, Select, styled, Switch, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import React, { useRef, useState } from 'react';

const UploadImageButton = styled(Button)({
    marginTop: 10,
    width: "50%"
});

export const Profile = () => {

    const [bloodGroup, setBloodGroup] = useState("");
    const handleBloodGroupChange = (event: any) => {
        setBloodGroup(event.target.value as string);
    };

    const uploadInputRef = useRef(null);
    return (
        <Box flex={4} pt={3}>
            <Box p={2} mt={2} bgcolor="white" boxShadow={1}>
                <Box display="flex" justifyContent="flex-start" >
                    <Box margin={2}>
                        <Box height="100%" width="100%" display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center" padding={1}>
                            <Box component="img"
                                sx={{
                                    height: 233,
                                    width: 233,
                                    borderRadius: '50%'
                                }}

                                alt="Profile Picture"
                                src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                            />


                            <UploadImageButton variant='outlined' endIcon={<CameraAlt />}> Upload
                                <input
                                    ref={uploadInputRef}
                                    type="file"
                                    accept="image/*"
                                    hidden
                                />
                            </UploadImageButton>
                        </Box>
                    </Box>

                    <Box width="80%" display="flex" flexDirection="column" padding={2} gap={3}>

                        <Box display="flex" flexDirection="column" gap={2} >
                            <Typography variant="body2" fontWeight={500} color="text.secondary">Personal Information</Typography>
                            <Box width="100%" display="flex" columnGap={2}>
                                <TextField
                                    required
                                    label="First Name"
                                    defaultValue="Sugam"
                                    fullWidth
                                />
                                <TextField
                                    required
                                    label="Last Name"
                                    defaultValue="Adhikari"
                                    fullWidth
                                />
                            </Box>
                            <Box width="100%" display="flex" columnGap={2} >
                                <TextField
                                    inputProps={{ readOnly: true }}
                                    label="Date of birth"
                                    defaultValue="2001-02-23"
                                    fullWidth
                                />
                                <TextField
                                    id="demo-simple-select"
                                    value={bloodGroup}
                                    label="Blood Group"
                                    fullWidth
                                    select
                                    onChange={(event) => handleBloodGroupChange(event)}
                                >
                                    <MenuItem value={1}>A +</MenuItem>
                                    <MenuItem value={2}>A -</MenuItem>
                                    <MenuItem value={3}>B +</MenuItem>
                                    <MenuItem value={4}>B -</MenuItem>
                                    <MenuItem value={5}>AB +</MenuItem>
                                    <MenuItem value={6}>AB -</MenuItem>
                                    <MenuItem value={7}>O +</MenuItem>
                                    <MenuItem value={8}>O -</MenuItem>
                                </TextField>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Typography variant="body2" fontWeight={500} color="text.secondary">Contact Information</Typography>
                            <Box width="100%" display="flex" columnGap={2}>
                                <TextField
                                    required
                                    label="Email"
                                    defaultValue="sugam@gmail.com"
                                    fullWidth
                                />
                                <TextField
                                    required
                                    label="Phone"
                                    defaultValue="+977 9843923560"
                                    fullWidth
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Divider />
                <Box display="flex" mt={2} alignItems="center" justifyContent="flex-start" width="100%">
                    <Box display="flex" flexDirection="column" gap={2} width="inherit">
                        <Typography variant="body2" fontWeight={500} color="text.secondary">Volunteering Profile</Typography>
                        <Box width="100%" display="flex" columnGap={5}>
                            <TextField
                                required
                                label="username"
                                defaultValue="sugamadhiakri"
                                fullWidth
                            />
                            <Divider orientation="vertical" flexItem />
                            <Box width="50%" display="flex" alignItems="center" gap={5}>
                                <Box>
                                    <Typography>Blood Donation Availability</Typography>
                                    <Typography variant="body2" color="text.secondary">(Last Donated: 12/01/22)</Typography>
                                </Box>
                                <Box display={"flex"} alignItems="center">
                                    <Switch />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box width="100%" display={"flex"} flexDirection="row" justifyContent={"flex-end"} m={1} p={2}>
                <Button variant="contained" size='large' sx={{
                    width: '15%'
                }}>Save</Button>
            </Box>
        </Box>
    );
};
