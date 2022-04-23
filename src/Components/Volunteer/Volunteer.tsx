import { Box, Stack } from "@mui/material";
import { VolunteerFeed } from "./VolunteerFeed";
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