import { Box, Stack } from "@mui/material";
import { Fundraisers } from "./Fundraisers";
import { Profile } from "./Profile";
import { VolunteerFeed } from "./VolunteerFeed";
import { VolunteeringProgramme } from "./VolunteeringProgramme";
import VolunteerNavBar from "./VolunteerNavBar";
import VolunteerRightBar from "./VolunteerRightBar";
import VolunteerSideBar from "./VolunteerSideBar";

export const Volunteer = () => {
    return (
        <Box>
            <VolunteerNavBar />
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <VolunteerSideBar />
                <VolunteerFeed />
                <VolunteerRightBar />
            </Stack>
        </Box>
    );
};