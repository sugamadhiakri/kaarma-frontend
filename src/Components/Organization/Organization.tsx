import { Box, Stack } from "@mui/material";
import { OrganizationFeed } from "./OrganizationFeed";
import { OrganizationNavBar } from "./OrganizationNavBar";
import { OrganizationSideBar } from "./OrganizationSideBar";

export const Organization = () => (
    <Box>
        <OrganizationNavBar />

        <Stack direction="row" spacing={2} justifyContent="space-between">
            <OrganizationSideBar />
            <OrganizationFeed />
        </Stack>
    </Box>
);